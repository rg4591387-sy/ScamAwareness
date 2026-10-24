export type RiskLevel = 'High' | 'Medium' | 'Low' | 'Uncertain';

export type ConfidenceLevel = 'High' | 'Moderate' | 'Cautious';

export type MessageContext = 'sms' | 'email' | 'job_offer' | 'payment_request' | 'social_media' | 'other';

export interface AnalysisWarningSign {
  title: string;
  quotedOrParaphrasedEvidence: string;
  explanation: string;
}

export interface AnalysisResponse {
  id: string;
  riskLevel: RiskLevel;
  confidence: ConfidenceLevel;
  summary: string;
  warningSigns: AnalysisWarningSign[];
  positiveSignals: string[];
  recommendedActions: string[];
  linkSafety: string;
  educationalDisclaimer: string;
  analyzedAt: string;
  isDemo: boolean;
  categoryHint?: string;
  contextUsed?: MessageContext;
}

export interface AnalysisRequest {
  message: string;
  context: MessageContext;
  forceDemo?: boolean;
}

export interface ScamCategory {
  id: string;
  name: string;
  shortDescription: string;
  badge: string;
  iconName: string;
  riskLevel: RiskLevel;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  howItWorks: string[];
  warningSigns: string[];
  realisticExample: {
    scenario: string;
    suspiciousArtifact: string;
    redFlags: string[];
  };
  manipulationTechniques: string[];
  howToStaySafe: string[];
  whatToDoIfAffected: string[];
  studentConsiderations: string[];
}

export interface QuizQuestion {
  categoryId: string;
  categoryName: string;
  questionId: string;
  questionText: string;
  scenario: string;
  answerOptions: string[];
  correctAnswer: number; // 0-indexed index
  explanation: string;
  optionExplanations: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  relatedLearningContent: string;
  audienceTags: string[];
}

export interface QuizAttemptAnswer {
  questionId: string;
  questionText: string;
  selectedOption: number;
  correctAnswer: number;
  isCorrect: boolean;
  options: string[];
  explanation: string;
  optionExplanation: string;
}

export interface QuizAttempt {
  id: string;
  categoryId: string;
  categoryName: string;
  score: number;
  total: number;
  percentage: number;
  answers: QuizAttemptAnswer[];
  completedAt: string;
}

export interface SimulationOption {
  id: string;
  label: string;
  isSafe: boolean;
  riskLevel: 'Safe' | 'Caution' | 'Dangerous';
  whatScenarioTested: string;
  keyWarningSigns: string[];
  explanation: string;
  optimalSafeResponse: string;
}

export interface SimulationScenario {
  id: string;
  title: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  channel: 'Email' | 'SMS' | 'WhatsApp' | 'Call' | 'Telegram' | 'Campus Portal';
  senderInfo: {
    name: string;
    handleOrEmail: string;
    avatarHint: string;
  };
  content: string;
  metaNotes?: string;
  options: SimulationOption[];
}

export interface ChecklistItem {
  id: string;
  sectionId: string;
  title: string;
  explanation: string;
  deepDive: string;
}

export interface ChecklistSection {
  id: string;
  title: string;
  description: string;
  iconName: string;
  items: ChecklistItem[];
}

export interface LearningModule {
  id: string;
  title: string;
  summary: string;
  keyPoints: string[];
  quizCategoryTarget?: string;
}

export interface LearningTrack {
  id: string;
  level: string;
  title: string;
  description: string;
  estimatedMinutes: number;
  iconName: string;
  modules: LearningModule[];
}

export interface SavedAnalysisSummary {
  id: string;
  riskLevel: RiskLevel;
  summary: string;
  context: MessageContext;
  timestamp: string;
}

export interface UserProgress {
  scansCount: number;
  quizAttempts: QuizAttempt[];
  completedCategories: string[];
  completedModules: string[];
  completedSimulations: string[];
  checklistCompletedIds: string[];
  savedAnalyses: SavedAnalysisSummary[];
  weeklyChallengeCompleted: boolean;
  weeklyChallengeScore?: number;
  lastActive: string;
}

export interface ServerHealthResponse {
  status: 'ok' | 'degraded';
  timestamp: string;
  version: string;
  geminiConfigured: boolean;
  geminiModel: string;
  databaseType: string;
}
