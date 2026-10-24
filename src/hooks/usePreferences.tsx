import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { DEFAULT_PREFERENCES, localStore, UserPreferences } from '../services/storage';
import { apiClient } from '../services/apiClient';
import { ServerHealthResponse } from '../types';

interface PreferencesContextType {
  preferences: UserPreferences;
  serverHealth: ServerHealthResponse | null;
  isHealthLoading: boolean;
  updatePreferences: (newPrefs: Partial<UserPreferences>) => void;
  checkServerHealth: () => Promise<void>;
}

const PreferencesContext = createContext<PreferencesContextType | null>(null);

export const PreferencesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [preferences, setPreferences] = useState<UserPreferences>(() => localStore.getPreferences());
  const [serverHealth, setServerHealth] = useState<ServerHealthResponse | null>(null);
  const [isHealthLoading, setIsHealthLoading] = useState<boolean>(true);

  const checkServerHealth = useCallback(async () => {
    setIsHealthLoading(true);
    try {
      const health = await apiClient.getHealth();
      setServerHealth(health);
    } catch {
      setServerHealth({
        status: 'degraded',
        timestamp: new Date().toISOString(),
        version: '2.0.0',
        geminiConfigured: false,
        geminiModel: 'offline-demo',
        databaseType: 'local_storage_fallback',
      });
    } finally {
      setIsHealthLoading(false);
    }
  }, []);

  useEffect(() => {
    checkServerHealth();
  }, [checkServerHealth]);

  const updatePreferences = useCallback((newPrefs: Partial<UserPreferences>) => {
    setPreferences((prev) => {
      const updated = localStore.savePreferences(newPrefs);
      return updated;
    });
  }, []);

  return (
    <PreferencesContext.Provider
      value={{
        preferences,
        serverHealth,
        isHealthLoading,
        updatePreferences,
        checkServerHealth,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};

export const usePreferences = () => {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error('usePreferences must be used within a PreferencesProvider');
  }
  return context;
};
