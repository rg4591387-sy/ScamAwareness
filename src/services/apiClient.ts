import {
  AnalysisRequest,
  AnalysisResponse,
  QuizAttempt,
  ServerHealthResponse,
  UserProgress,
} from '../types';

const API_BASE = '/api';

export class ApiError extends Error {
  public status?: number;
  public details?: any;

  constructor(message: string, status?: number, details?: any) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.details = details;
  }
}

async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE}${endpoint}`;
  try {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!res.ok) {
      let errData: any = {};
      try {
        errData = await res.json();
      } catch {
        // text fallback
      }
      throw new ApiError(
        errData.message || `Request failed with status ${res.status}`,
        res.status,
        errData
      );
    }

    return await res.json();
  } catch (error: any) {
    if (error instanceof ApiError) throw error;
    throw new ApiError(error.message || 'Network connection failed');
  }
}

export const apiClient = {
  getHealth: async (): Promise<ServerHealthResponse> => {
    return request<ServerHealthResponse>('/health');
  },

  analyzeMessage: async (data: AnalysisRequest): Promise<AnalysisResponse> => {
    return request<AnalysisResponse>('/analyze', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  getProgress: async (): Promise<UserProgress> => {
    return request<UserProgress>('/progress');
  },

  saveQuizAttempt: async (attempt: QuizAttempt): Promise<{ success: boolean; progress: any }> => {
    return request<{ success: boolean; progress: any }>('/progress/quiz', {
      method: 'POST',
      body: JSON.stringify(attempt),
    });
  },

  markCategoryComplete: async (categoryId: string): Promise<{ success: boolean; completedCategories: string[] }> => {
    return request<{ success: boolean; completedCategories: string[] }>('/progress/category', {
      method: 'POST',
      body: JSON.stringify({ categoryId }),
    });
  },

  saveChecklist: async (completedIds: string[]): Promise<{ success: boolean; checklistCompletedIds: string[] }> => {
    return request<{ success: boolean; checklistCompletedIds: string[] }>('/progress/checklist', {
      method: 'POST',
      body: JSON.stringify({ completedIds }),
    });
  },

  saveSimulation: async (simulationId: string): Promise<{ success: boolean; completedSimulations: string[] }> => {
    return request<{ success: boolean; completedSimulations: string[] }>('/progress/simulation', {
      method: 'POST',
      body: JSON.stringify({ simulationId }),
    });
  },

  saveAnalysisSummary: async (summary: {
    id: string;
    riskLevel: string;
    summary: string;
    context: string;
  }): Promise<{ success: boolean; savedAnalyses: any[] }> => {
    return request<{ success: boolean; savedAnalyses: any[] }>('/progress/analysis', {
      method: 'POST',
      body: JSON.stringify(summary),
    });
  },

  clearProgress: async (): Promise<{ success: boolean }> => {
    return request<{ success: boolean }>('/progress', {
      method: 'DELETE',
    });
  },
};
