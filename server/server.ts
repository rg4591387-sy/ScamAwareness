import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { config } from './config.js';
import { analyzeRequestSchema, quizAttemptSchema } from './schemas.js';
import { analyzeMessageWithGemini } from './gemini.js';
import { repository } from './repository.js';
import { DEMO_SAMPLES } from './demoAnalyses.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(express.json({ limit: '100kb' }));
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow localhost and specified client URL
      if (!origin || origin.startsWith('http://localhost:') || origin.startsWith('http://127.0.0.1:') || origin === config.clientUrl) {
        callback(null, true);
      } else {
        callback(null, true); // Permissive for local dev / testing
      }
    },
    credentials: true,
  })
);

// Basic IP rate limiting for API routes (30 requests/min)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 40;

app.use('/api', (req, res, next) => {
  const ip = req.ip || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const clientRecord = rateLimitMap.get(ip) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW };

  if (now > clientRecord.resetTime) {
    clientRecord.count = 1;
    clientRecord.resetTime = now + RATE_LIMIT_WINDOW;
  } else {
    clientRecord.count += 1;
  }

  rateLimitMap.set(ip, clientRecord);

  if (clientRecord.count > MAX_REQUESTS_PER_WINDOW) {
    return res.status(429).json({
      error: 'TOO_MANY_REQUESTS',
      message: 'Rate limit exceeded. Please wait a minute before analyzing more messages.',
    });
  }
  next();
});

// Safe Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '2.0.0',
    geminiConfigured: config.isGeminiConfigured,
    geminiModel: config.geminiModel,
    databaseType: 'local_file_store',
  });
});

// Helper for Demo Analysis fallback
function generateSmartDemoAnalysis(message: string, context: string) {
  const lowerMsg = message.toLowerCase();

  // Pick suitable sample if keywords match
  if (lowerMsg.includes('upi') || lowerMsg.includes('pin') || lowerMsg.includes('qr') || context === 'payment_request') {
    return DEMO_SAMPLES.payment_request.result;
  }
  if (lowerMsg.includes('job') || lowerMsg.includes('intern') || lowerMsg.includes('salary') || lowerMsg.includes('telegram') || context === 'job_offer') {
    return DEMO_SAMPLES.job_offer.result;
  }
  if (lowerMsg.includes('pan') || lowerMsg.includes('kyc') || lowerMsg.includes('blocked') || lowerMsg.includes('sbi') || context === 'sms') {
    return DEMO_SAMPLES.sms.result;
  }
  if (lowerMsg.includes('crypto') || lowerMsg.includes('invest') || lowerMsg.includes('returns') || context === 'social_media') {
    return DEMO_SAMPLES.social_media.result;
  }
  if (lowerMsg.includes('library') || (lowerMsg.includes('book') && !lowerMsg.includes('urgent') && !lowerMsg.includes('pay'))) {
    return DEMO_SAMPLES.legitimate_sample.result;
  }
  if (lowerMsg.includes('hall ticket') || lowerMsg.includes('exam') || context === 'email') {
    return DEMO_SAMPLES.email.result;
  }

  // General heuristic analysis
  const hasUrgency = /urgent|immediately|today|hours|suspend|debar|blocked|penalty|action required/i.test(message);
  const hasPayment = /pay|transfer|fee|upi|deposit|pin|cvv|account|rs\.|₹/i.test(message);
  const hasLinks = /http|https|www\.|\.online|\.info|\.me/i.test(message);

  const signs = [];
  if (hasUrgency) {
    signs.push({
      title: 'High Pressure / Time Urgency',
      quotedOrParaphrasedEvidence: 'Notice contains urgent action demands or deadlines',
      explanation: 'Scammers frequently manufacture crisis or rush windows so victims act before thinking.',
    });
  }
  if (hasPayment) {
    signs.push({
      title: 'Financial Demand or Direct Transfer Request',
      quotedOrParaphrasedEvidence: 'References payment, fee, UPI transfer, or account credentials',
      explanation: 'Unsolicited requests for financial deposits, especially via direct UPI, are high risk.',
    });
  }
  if (hasLinks) {
    signs.push({
      title: 'Embedded Unverified Link',
      quotedOrParaphrasedEvidence: 'Includes web links or domain references',
      explanation: 'Links in unsolicited communications can lead to spoofed credential harvest portals.',
    });
  }

  const isHighRisk = signs.length >= 2;
  const isMedRisk = signs.length === 1;

  return {
    id: `demo-analysis-${Date.now()}`,
    riskLevel: isHighRisk ? ('High' as const) : isMedRisk ? ('Medium' as const) : ('Low' as const),
    confidence: 'Cautious' as const,
    summary: isHighRisk
      ? 'Demo Mode Analysis: Message contains multiple high-priority warning indicators typical of social engineering scams.'
      : 'Demo Mode Analysis: Analyzed using offline educational heuristic rules.',
    warningSigns: signs.length > 0 ? signs : [
      {
        title: 'Review Communication Channel',
        quotedOrParaphrasedEvidence: 'Unsolicited message text',
        explanation: 'Always verify unexpected communications through secondary official channels.',
      },
    ],
    positiveSignals: signs.length === 0 ? ['No overt aggressive demands or credential requests identified.'] : [],
    recommendedActions: [
      'Do not click unknown links or download unexpected files.',
      'Never disclose OTPs, PINs, or banking credentials to anyone.',
      'Verify the sender identity directly through official published phone numbers or portals.',
    ],
    linkSafety: 'Demo Mode: Text-only analysis cannot inspect destination web redirects. Verify URLs manually before navigating.',
    educationalDisclaimer: config.isGeminiConfigured
      ? 'ScamShield Demo Mode: Generated via educational rules. Switch to Live AI mode in settings for Google Gemini neural analysis.'
      : 'ScamShield Demo Mode: Google Gemini API key is not configured on the server. Add GEMINI_API_KEY to your .env file to enable live AI analysis.',
    analyzedAt: new Date().toISOString(),
    isDemo: true,
    categoryHint: isHighRisk ? 'Suspicious Communication' : 'General Message',
    contextUsed: context as any,
  };
}

// POST /api/analyze - Message Analysis Endpoint
app.post('/api/analyze', async (req, res) => {
  try {
    const parseResult = analyzeRequestSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({
        error: 'INVALID_REQUEST',
        details: parseResult.error.flatten(),
      });
    }

    const { message, context, forceDemo } = parseResult.data;

    // Record scan count in repository
    repository.recordScan();

    // If client requested demo mode or Gemini is not configured, return demo response
    if (forceDemo || !config.isGeminiConfigured) {
      const demoResult = generateSmartDemoAnalysis(message, context);
      return res.json(demoResult);
    }

    // Call live Google Gemini model
    try {
      const liveResult = await analyzeMessageWithGemini(message, context);
      return res.json(liveResult);
    } catch (geminiError: any) {
      console.error('Gemini processing error:', geminiError?.message || geminiError);
      
      // If live Gemini failed due to quota or invalid key, return clear fallback with educational note
      const fallback = generateSmartDemoAnalysis(message, context);
      fallback.educationalDisclaimer += ' (Live Gemini service was temporarily unavailable, returned educational fallback).';
      return res.json(fallback);
    }
  } catch (error: any) {
    console.error('Unhandled analyzer error:', error?.message || error);
    res.status(500).json({
      error: 'ANALYZER_ERROR',
      message: 'Failed to process message analysis. Please try again.',
    });
  }
});

// GET /api/progress - Retrieve user progress
app.get('/api/progress', (req, res) => {
  const data = repository.getProgress();
  res.json(data);
});

// POST /api/progress/quiz - Record a quiz attempt
app.post('/api/progress/quiz', (req, res) => {
  const parseResult = quizAttemptSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({
      error: 'INVALID_QUIZ_PAYLOAD',
      details: parseResult.error.flatten(),
    });
  }

  const updated = repository.saveQuizAttempt(parseResult.data);
  res.json({ success: true, progress: updated });
});

// POST /api/progress/category - Mark category as learned
app.post('/api/progress/category', (req, res) => {
  const { categoryId } = req.body;
  if (!categoryId || typeof categoryId !== 'string') {
    return res.status(400).json({ error: 'MISSING_CATEGORY_ID' });
  }

  const completed = repository.markCategoryCompleted(categoryId);
  res.json({ success: true, completedCategories: completed });
});

// POST /api/progress/checklist - Save checklist completion
app.post('/api/progress/checklist', (req, res) => {
  const { completedIds } = req.body;
  if (!Array.isArray(completedIds)) {
    return res.status(400).json({ error: 'INVALID_CHECKLIST_ARRAY' });
  }

  const updated = repository.setChecklistCompleted(completedIds);
  res.json({ success: true, checklistCompletedIds: updated });
});

// POST /api/progress/simulation - Record simulation completed
app.post('/api/progress/simulation', (req, res) => {
  const { simulationId } = req.body;
  if (!simulationId || typeof simulationId !== 'string') {
    return res.status(400).json({ error: 'MISSING_SIMULATION_ID' });
  }

  const updated = repository.recordSimulationCompleted(simulationId);
  res.json({ success: true, completedSimulations: updated });
});

// POST /api/progress/analysis - Save consented minimal summary
app.post('/api/progress/analysis', (req, res) => {
  const { id, riskLevel, summary, context } = req.body;
  if (!id || !riskLevel || !summary) {
    return res.status(400).json({ error: 'INVALID_ANALYSIS_SUMMARY_PAYLOAD' });
  }

  const saved = repository.saveAnalysisSummary({ id, riskLevel, summary, context: context || 'other' });
  res.json({ success: true, savedAnalyses: saved });
});

// DELETE /api/progress - Reset user data
app.delete('/api/progress', (req, res) => {
  const reset = repository.clearAll();
  res.json({ success: true, progress: reset });
});

// Serve frontend in production
if (config.nodeEnv === 'production') {
  const distPath = path.resolve(__dirname, '../dist');
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

// Start Server
app.listen(config.port, () => {
  console.log(`[ScamShield AI 2.0 Server] Running on http://localhost:${config.port}`);
  console.log(`[Status] Gemini Configured: ${config.isGeminiConfigured ? 'YES (Model: ' + config.geminiModel + ')' : 'NO (Operating in Demo Mode)'}`);
});
