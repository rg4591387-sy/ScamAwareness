import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Search,
  Trash2,
  Clipboard,
  FileText,
  AlertTriangle,
  Lock,
  Sparkles,
  Cpu,
  Layers,
  Check,
} from 'lucide-react';
import { AnalysisResponse, MessageContext } from '../types';
import { apiClient } from '../services/apiClient';
import { usePreferences } from '../hooks/usePreferences';
import { useProgress } from '../hooks/useProgress';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { AnalyzerResults } from '../components/analyzer/AnalyzerResults';
import { DEMO_SAMPLES } from '../data/demoAnalyses';

const CONTEXT_OPTIONS: { value: MessageContext; label: string }[] = [
  { value: 'sms', label: 'SMS / Text Message' },
  { value: 'email', label: 'Email' },
  { value: 'job_offer', label: 'Job / Internship Offer' },
  { value: 'payment_request', label: 'Payment / UPI Request' },
  { value: 'social_media', label: 'Social Media / DM' },
  { value: 'other', label: 'Other Communication' },
];

export const Analyzer: React.FC = () => {
  const location = useLocation();
  const { preferences, serverHealth } = usePreferences();
  const { recordScan, saveAnalysisSummary } = useProgress();

  const [message, setMessage] = useState('');
  const [context, setContext] = useState<MessageContext>('job_offer');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResponse | null>(null);
  const [copiedStatus, setCopiedStatus] = useState(false);

  // Check if message was forwarded via location state (e.g. from homepage quick input)
  useEffect(() => {
    if (location.state && (location.state as any).prefilledMessage) {
      setMessage((location.state as any).prefilledMessage);
    }
  }, [location.state]);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setMessage(text);
        setError(null);
      }
    } catch {
      setError('Clipboard permission denied. Please paste manually into the text box.');
    }
  };

  const handleLoadSample = (sampleKey: string) => {
    const sample = (DEMO_SAMPLES as any)[sampleKey];
    if (sample) {
      setMessage(sample.message);
      if (sampleKey in ['sms', 'email', 'job_offer', 'payment_request', 'social_media']) {
        setContext(sampleKey as MessageContext);
      } else {
        setContext('other');
      }
      setError(null);
    }
  };

  const handleClear = () => {
    setMessage('');
    setError(null);
    setResult(null);
  };

  const handleAnalyze = async () => {
    const trimmed = message.trim();
    if (!trimmed) {
      setError('Please enter or paste a message to analyze.');
      return;
    }
    if (trimmed.length < 3) {
      setError('Message must be at least 3 characters long.');
      return;
    }
    if (trimmed.length > 4000) {
      setError('Message exceeds 4,000 character maximum limit.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await apiClient.analyzeMessage({
        message: trimmed,
        context,
        forceDemo: preferences.forceDemoMode,
      });

      setResult(response);
      recordScan();

      // If user consented to save minimal summary, store it
      if (preferences.saveAnalysisHistoryConsent) {
        saveAnalysisSummary({
          id: response.id,
          riskLevel: response.riskLevel,
          summary: response.summary,
          context: (response.contextUsed || context) as MessageContext,
        });
      }
    } catch (err: any) {
      console.error('Analysis error:', err);
      setError(err?.message || 'Failed to complete analysis. Please verify your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  const isGeminiAvailable = Boolean(serverHealth?.geminiConfigured);

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-2">
              <Search size={13} className="text-cyan-400" />
              <span>Message Intelligence</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Scam & Threat Analyzer
            </h1>
          </div>

          {/* Mode Pill */}
          <div className="text-right">
            <span
              className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-semibold border ${
                isGeminiAvailable && !preferences.forceDemoMode
                  ? 'bg-cyan-950/40 text-cyan-300 border-cyan-500/40'
                  : 'bg-amber-950/40 text-amber-300 border-amber-500/40'
              }`}
            >
              {isGeminiAvailable && !preferences.forceDemoMode ? (
                <>
                  <Sparkles size={13} className="text-cyan-400" /> Live Gemini AI
                </>
              ) : (
                <>
                  <Cpu size={13} className="text-amber-400" /> Demo Mode
                </>
              )}
            </span>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
          Paste any suspicious email, SMS, internship offer, or payment request. ScamShield will evaluate manipulation patterns, highlight quoted red flags, and provide safe next steps.
        </p>
      </div>

      {/* Main Analyzer Input Panel */}
      {!result ? (
        <Card className="p-5 sm:p-6 space-y-5 border-slate-700/80">
          {/* Context Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Select Message Context:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {CONTEXT_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setContext(opt.value)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium text-left transition border ${
                    context === opt.value
                      ? 'bg-indigo-950 text-cyan-300 border-cyan-400 font-semibold shadow-sm'
                      : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Text Input Area */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="message-box" className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Message Content:
              </label>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePaste}
                  className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-medium"
                >
                  <Clipboard size={12} /> Paste
                </button>
                {message && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 font-medium ml-2"
                  >
                    <Trash2 size={12} /> Clear
                  </button>
                )}
              </div>
            </div>

            <textarea
              id="message-box"
              rows={8}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (error) setError(null);
              }}
              placeholder="Paste the suspicious SMS, WhatsApp message, recruiter email, or DM here..."
              maxLength={4000}
              className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl p-4 text-sm text-slate-100 placeholder-slate-500 font-sans leading-relaxed focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition resize-y"
            />

            <div className="flex items-center justify-between text-xs text-slate-500 mt-2">
              <span>Characters: {message.length} / 4,000</span>
              <span className="text-[11px]">Treated strictly as untrusted data</span>
            </div>
          </div>

          {/* Quick Sample Loader Chips */}
          <div className="pt-2 border-t border-slate-800/80">
            <span className="text-xs font-semibold text-slate-400 block mb-2">
              Load realistic test sample:
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleLoadSample('job_offer')}
                className="text-xs px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-700 hover:border-cyan-500/40 transition"
              >
                Fake Telegram Intern Offer
              </button>
              <button
                type="button"
                onClick={() => handleLoadSample('payment_request')}
                className="text-xs px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-700 hover:border-cyan-500/40 transition"
              >
                OLX UPI QR Scam
              </button>
              <button
                type="button"
                onClick={() => handleLoadSample('sms')}
                className="text-xs px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-700 hover:border-cyan-500/40 transition"
              >
                Bank KYC Threat SMS
              </button>
              <button
                type="button"
                onClick={() => handleLoadSample('email')}
                className="text-xs px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-700 hover:border-cyan-500/40 transition"
              >
                Campus Hall Ticket Phishing
              </button>
              <button
                type="button"
                onClick={() => handleLoadSample('legitimate_sample')}
                className="text-xs px-2.5 py-1 rounded bg-slate-900 text-emerald-300 border border-emerald-500/30 hover:border-emerald-500 transition"
              >
                Legitimate Library Notice
              </button>
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-lg flex items-start gap-2.5 text-xs text-slate-400">
            <Lock size={15} className="text-cyan-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-slate-200">Privacy Safeguard:</strong> Never enter actual passwords, OTPs, PINs, CVVs, or bank account numbers. ScamShield analyzes communication patterns for educational safety only.
            </p>
          </div>

          {/* Inline Validation Error */}
          {error && (
            <div className="p-3 bg-rose-950/40 border border-rose-500/40 rounded-lg flex items-center gap-2 text-xs text-rose-300">
              <AlertTriangle size={15} className="shrink-0 text-rose-400" />
              <span>{error}</span>
            </div>
          )}

          {/* Action Button */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={handleAnalyze}
              isLoading={isLoading}
              disabled={!message.trim()}
              leftIcon={<Search size={18} />}
              className="w-full sm:w-auto"
            >
              Analyze Message Safety
            </Button>
          </div>
        </Card>
      ) : (
        <AnalyzerResults result={result} onReset={handleClear} />
      )}
    </div>
  );
};
