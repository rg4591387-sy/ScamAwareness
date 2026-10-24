import fs from 'fs';
import path from 'path';

export interface RepositoryData {
  scansCount: number;
  quizAttempts: any[];
  completedCategories: string[];
  completedModules: string[];
  completedSimulations: string[];
  checklistCompletedIds: string[];
  savedAnalyses: any[];
  weeklyChallengeCompleted: boolean;
  weeklyChallengeScore?: number;
  lastActive: string;
}

const DATA_DIR = path.resolve(process.cwd(), '.data');
const DATA_FILE = path.join(DATA_DIR, 'scamshield_store.json');

const INITIAL_DATA: RepositoryData = {
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

class StorageRepository {
  private memoryCache: RepositoryData = { ...INITIAL_DATA };

  constructor() {
    this.ensureInitialized();
  }

  private ensureInitialized() {
    try {
      if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }

      if (fs.existsSync(DATA_FILE)) {
        const content = fs.readFileSync(DATA_FILE, 'utf-8');
        this.memoryCache = JSON.parse(content);
      } else {
        this.persist();
      }
    } catch (err) {
      console.warn('Repository file system initialization notice:', err);
    }
  }

  private persist() {
    try {
      if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }
      fs.writeFileSync(DATA_FILE, JSON.stringify(this.memoryCache, null, 2), 'utf-8');
    } catch (err) {
      console.error('Failed to write repository file:', err);
    }
  }

  public getProgress(): RepositoryData {
    return { ...this.memoryCache };
  }

  public recordScan() {
    this.memoryCache.scansCount += 1;
    this.memoryCache.lastActive = new Date().toISOString();
    this.persist();
    return this.memoryCache.scansCount;
  }

  public saveQuizAttempt(attempt: any) {
    this.memoryCache.quizAttempts.unshift(attempt);
    // keep maximum 50 attempts
    if (this.memoryCache.quizAttempts.length > 50) {
      this.memoryCache.quizAttempts = this.memoryCache.quizAttempts.slice(0, 50);
    }

    if (attempt.percentage >= 60 && !this.memoryCache.completedCategories.includes(attempt.categoryId)) {
      this.memoryCache.completedCategories.push(attempt.categoryId);
    }

    this.memoryCache.lastActive = new Date().toISOString();
    this.persist();
    return this.memoryCache;
  }

  public markCategoryCompleted(categoryId: string) {
    if (!this.memoryCache.completedCategories.includes(categoryId)) {
      this.memoryCache.completedCategories.push(categoryId);
      this.memoryCache.lastActive = new Date().toISOString();
      this.persist();
    }
    return this.memoryCache.completedCategories;
  }

  public setChecklistCompleted(completedIds: string[]) {
    this.memoryCache.checklistCompletedIds = [...new Set(completedIds)];
    this.memoryCache.lastActive = new Date().toISOString();
    this.persist();
    return this.memoryCache.checklistCompletedIds;
  }

  public recordSimulationCompleted(simulationId: string) {
    if (!this.memoryCache.completedSimulations.includes(simulationId)) {
      this.memoryCache.completedSimulations.push(simulationId);
      this.memoryCache.lastActive = new Date().toISOString();
      this.persist();
    }
    return this.memoryCache.completedSimulations;
  }

  public saveAnalysisSummary(summary: { id: string; riskLevel: string; summary: string; context: string }) {
    // Only stores minimal metadata and safe summary with user consent; never stores raw message
    this.memoryCache.savedAnalyses.unshift({
      ...summary,
      timestamp: new Date().toISOString(),
    });
    if (this.memoryCache.savedAnalyses.length > 20) {
      this.memoryCache.savedAnalyses = this.memoryCache.savedAnalyses.slice(0, 20);
    }
    this.memoryCache.lastActive = new Date().toISOString();
    this.persist();
    return this.memoryCache.savedAnalyses;
  }

  public clearAll(): RepositoryData {
    this.memoryCache = {
      ...INITIAL_DATA,
      lastActive: new Date().toISOString(),
    };
    this.persist();
    return this.memoryCache;
  }
}

export const repository = new StorageRepository();
