import { z } from 'zod';

export const contextEnum = z.enum([
  'sms',
  'email',
  'job_offer',
  'payment_request',
  'social_media',
  'other',
]);

export const analyzeRequestSchema = z.object({
  message: z
    .string()
    .min(3, 'Message must be at least 3 characters long')
    .max(4000, 'Message cannot exceed 4000 characters')
    .transform((val) => val.trim()),
  context: contextEnum.default('other'),
  forceDemo: z.boolean().optional().default(false),
});

export const warningSignSchema = z.object({
  title: z.string(),
  quotedOrParaphrasedEvidence: z.string(),
  explanation: z.string(),
});

export const analyzeResponseSchema = z.object({
  id: z.string(),
  riskLevel: z.enum(['High', 'Medium', 'Low', 'Uncertain']),
  confidence: z.enum(['High', 'Moderate', 'Cautious']),
  summary: z.string(),
  warningSigns: z.array(warningSignSchema),
  positiveSignals: z.array(z.string()),
  recommendedActions: z.array(z.string()),
  linkSafety: z.string(),
  educationalDisclaimer: z.string(),
  analyzedAt: z.string(),
  isDemo: z.boolean(),
  categoryHint: z.string().optional(),
  contextUsed: contextEnum.optional(),
});

export const quizAttemptSchema = z.object({
  id: z.string(),
  categoryId: z.string(),
  categoryName: z.string(),
  score: z.number().min(0),
  total: z.number().min(1),
  percentage: z.number().min(0).max(100),
  answers: z.array(
    z.object({
      questionId: z.string(),
      questionText: z.string(),
      selectedOption: z.number(),
      correctAnswer: z.number(),
      isCorrect: z.boolean(),
      options: z.array(z.string()),
      explanation: z.string(),
      optionExplanation: z.string(),
    })
  ),
  completedAt: z.string(),
});
