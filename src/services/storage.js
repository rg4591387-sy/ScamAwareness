const STORAGE_KEY_PROGRESS = 'scamshield_user_progress_v2';
const STORAGE_KEY_PREFS = 'scamshield_user_preferences_v2';
export const DEFAULT_PREFERENCES = {
    theme: 'dark',
    forceDemoMode: false,
    saveAnalysisHistoryConsent: false,
    reducedMotion: false,
};
export const INITIAL_PROGRESS = {
    scansCount: 0,
    quizAttempts: [],
    completedCategories: [],
    completedModules: [],
    completedSimulations: [],
    checklistCompletedIds: [],
    savedAnalyses: [],
    weeklyChallengeCompleted: false,
    lastActive: new Date().toISOString(),
};
export function calculateCyberSafetyScore(progress) {
    // 1. Quiz Component (35% max)
    let avgAccuracy = 0;
    if (progress.quizAttempts.length > 0) {
        const sum = progress.quizAttempts.reduce((acc, curr) => acc + (curr.percentage || 0), 0);
        avgAccuracy = Math.round(sum / progress.quizAttempts.length);
    }
    const quizComponent = Math.round((avgAccuracy / 100) * 35);
    // 2. Category Learning (25% max - 12 categories total)
    const catCount = Math.min(progress.completedCategories.length, 12);
    const categoryComponent = Math.round((catCount / 12) * 25);
    // 3. Simulations Completed (20% max - 6 total scenarios)
    const simCount = Math.min(progress.completedSimulations.length, 6);
    const simulationComponent = Math.round((simCount / 6) * 20);
    // 4. Safety Checklist (20% max - 20 total items across 5 sections)
    const chkCount = Math.min(progress.checklistCompletedIds.length, 20);
    const checklistComponent = Math.round((chkCount / 20) * 20);
    const totalScore = Math.min(100, quizComponent + categoryComponent + simulationComponent + checklistComponent);
    return {
        totalScore,
        quizComponent,
        quizComponentMax: 35,
        categoryComponent,
        categoryComponentMax: 25,
        simulationComponent,
        simulationComponentMax: 20,
        checklistComponent,
        checklistComponentMax: 20,
        averageQuizAccuracy: avgAccuracy,
        completedCategoriesCount: catCount,
        completedSimulationsCount: simCount,
        completedChecklistCount: chkCount,
    };
}
export const localStore = {
    getProgress: () => {
        try {
            const data = localStorage.getItem(STORAGE_KEY_PROGRESS);
            if (!data)
                return INITIAL_PROGRESS;
            const parsed = JSON.parse(data);
            return {
                ...INITIAL_PROGRESS,
                ...parsed,
            };
        }
        catch (err) {
            console.warn('Failed to parse local progress, using defaults:', err);
            return INITIAL_PROGRESS;
        }
    },
    saveProgress: (progress) => {
        try {
            localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(progress));
        }
        catch (err) {
            console.error('Failed to save local progress:', err);
        }
    },
    getPreferences: () => {
        try {
            const data = localStorage.getItem(STORAGE_KEY_PREFS);
            if (!data)
                return DEFAULT_PREFERENCES;
            return { ...DEFAULT_PREFERENCES, ...JSON.parse(data) };
        }
        catch {
            return DEFAULT_PREFERENCES;
        }
    },
    savePreferences: (prefs) => {
        try {
            const current = localStore.getPreferences();
            const updated = { ...current, ...prefs };
            localStorage.setItem(STORAGE_KEY_PREFS, JSON.stringify(updated));
            return updated;
        }
        catch (err) {
            console.error('Failed to save preferences:', err);
            return DEFAULT_PREFERENCES;
        }
    },
    clearAll: () => {
        try {
            localStorage.removeItem(STORAGE_KEY_PROGRESS);
        }
        catch (err) {
            console.error('Failed to clear local progress:', err);
        }
    },
};
