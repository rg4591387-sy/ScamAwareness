import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { MessageContext, QuizAttempt, RiskLevel, UserProgress } from '../types';
import {
  calculateCyberSafetyScore,
  CyberScoreBreakdown,
  INITIAL_PROGRESS,
  localStore,
} from '../services/storage';
import { apiClient } from '../services/apiClient';

interface ProgressContextType {
  progress: UserProgress;
  scoreBreakdown: CyberScoreBreakdown;
  isLoading: boolean;
  recordScan: () => void;
  saveQuizAttempt: (attempt: QuizAttempt) => Promise<void>;
  markCategoryCompleted: (categoryId: string) => Promise<void>;
  saveChecklist: (completedIds: string[]) => Promise<void>;
  recordSimulationCompleted: (simulationId: string) => Promise<void>;
  saveAnalysisSummary: (summary: { id: string; riskLevel: RiskLevel; summary: string; context: MessageContext }) => Promise<void>;
  clearAll: () => Promise<void>;
  refreshProgress: () => Promise<void>;
}

const ProgressContext = createContext<ProgressContextType | null>(null);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgress>(() => localStore.getProgress());
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Sync from backend on initial mount
  const refreshProgress = useCallback(async () => {
    try {
      const serverProgress = await apiClient.getProgress();
      if (serverProgress) {
        setProgress(serverProgress);
        localStore.saveProgress(serverProgress);
      }
    } catch {
      // If server unreachable, retain local storage
      const local = localStore.getProgress();
      setProgress(local);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshProgress();
  }, [refreshProgress]);

  const scoreBreakdown = calculateCyberSafetyScore(progress);

  const recordScan = useCallback(() => {
    setProgress((prev) => {
      const updated = {
        ...prev,
        scansCount: prev.scansCount + 1,
        lastActive: new Date().toISOString(),
      };
      localStore.saveProgress(updated);
      return updated;
    });
  }, []);

  const saveQuizAttempt = useCallback(async (attempt: QuizAttempt) => {
    setProgress((prev) => {
      const attempts = [attempt, ...prev.quizAttempts].slice(0, 50);
      const completedCats = [...prev.completedCategories];
      if (attempt.percentage >= 60 && !completedCats.includes(attempt.categoryId)) {
        completedCats.push(attempt.categoryId);
      }
      const updated: UserProgress = {
        ...prev,
        quizAttempts: attempts,
        completedCategories: completedCats,
        lastActive: new Date().toISOString(),
      };
      localStore.saveProgress(updated);
      return updated;
    });

    try {
      await apiClient.saveQuizAttempt(attempt);
    } catch (err) {
      console.warn('Backend sync failed, saved locally:', err);
    }
  }, []);

  const markCategoryCompleted = useCallback(async (categoryId: string) => {
    setProgress((prev) => {
      if (prev.completedCategories.includes(categoryId)) return prev;
      const updated: UserProgress = {
        ...prev,
        completedCategories: [...prev.completedCategories, categoryId],
        lastActive: new Date().toISOString(),
      };
      localStore.saveProgress(updated);
      return updated;
    });

    try {
      await apiClient.markCategoryComplete(categoryId);
    } catch (err) {
      console.warn('Backend category sync failed:', err);
    }
  }, []);

  const saveChecklist = useCallback(async (completedIds: string[]) => {
    setProgress((prev) => {
      const updated: UserProgress = {
        ...prev,
        checklistCompletedIds: completedIds,
        lastActive: new Date().toISOString(),
      };
      localStore.saveProgress(updated);
      return updated;
    });

    try {
      await apiClient.saveChecklist(completedIds);
    } catch (err) {
      console.warn('Backend checklist sync failed:', err);
    }
  }, []);

  const recordSimulationCompleted = useCallback(async (simulationId: string) => {
    setProgress((prev) => {
      if (prev.completedSimulations.includes(simulationId)) return prev;
      const updated: UserProgress = {
        ...prev,
        completedSimulations: [...prev.completedSimulations, simulationId],
        lastActive: new Date().toISOString(),
      };
      localStore.saveProgress(updated);
      return updated;
    });

    try {
      await apiClient.saveSimulation(simulationId);
    } catch (err) {
      console.warn('Backend simulation sync failed:', err);
    }
  }, []);

  const saveAnalysisSummary = useCallback(
    async (summary: { id: string; riskLevel: RiskLevel; summary: string; context: MessageContext }) => {
      setProgress((prev) => {
        const analyses = [
          {
            ...summary,
            timestamp: new Date().toISOString(),
          },
          ...prev.savedAnalyses,
        ].slice(0, 20);
        const updated: UserProgress = {
          ...prev,
          savedAnalyses: analyses,
          lastActive: new Date().toISOString(),
        };
        localStore.saveProgress(updated);
        return updated;
      });

      try {
        await apiClient.saveAnalysisSummary(summary);
      } catch (err) {
        console.warn('Backend analysis save failed:', err);
      }
    },
    []
  );

  const clearAll = useCallback(async () => {
    localStore.clearAll();
    setProgress({ ...INITIAL_PROGRESS, lastActive: new Date().toISOString() });
    try {
      await apiClient.clearProgress();
    } catch (err) {
      console.warn('Backend clear failed:', err);
    }
  }, []);

  return (
    <ProgressContext.Provider
      value={{
        progress,
        scoreBreakdown,
        isLoading,
        recordScan,
        saveQuizAttempt,
        markCategoryCompleted,
        saveChecklist,
        recordSimulationCompleted,
        saveAnalysisSummary,
        clearAll,
        refreshProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
