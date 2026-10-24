import React, { useState } from 'react';
import {
  Settings as SettingsIcon,
  Cpu,
  Sparkles,
  Shield,
  Activity,
  Trash2,
  Download,
  Lock,
  RefreshCw,
  Eye,
  EyeOff,
} from 'lucide-react';
import { usePreferences } from '../hooks/usePreferences';
import { useProgress } from '../hooks/useProgress';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';

export const SettingsPage: React.FC = () => {
  const { preferences, updatePreferences, serverHealth, checkServerHealth, isHealthLoading } =
    usePreferences();
  const { progress, clearAll } = useProgress();

  const [showClearModal, setShowClearModal] = useState(false);

  const handleExportData = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(progress, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `scamshield_user_data_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-2">
          <SettingsIcon size={13} className="text-cyan-400" />
          <span>Platform Preferences & Security</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Settings & Privacy
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
          Manage AI operational mode, view backend server health, control telemetry consent, and manage your local data records.
        </p>
      </div>

      {/* AI Operational Mode & Health Status */}
      <Card className="p-6 border-slate-800 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Cpu size={18} className="text-cyan-400" />
              AI Integration Mode
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Toggle between live Google Gemini neural models and offline educational Demo Mode.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => updatePreferences({ forceDemoMode: false })}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition border ${
                !preferences.forceDemoMode
                  ? 'bg-cyan-950 text-cyan-300 border-cyan-400 shadow-sm'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              Live AI Priority
            </button>
            <button
              onClick={() => updatePreferences({ forceDemoMode: true })}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition border ${
                preferences.forceDemoMode
                  ? 'bg-amber-950 text-amber-300 border-amber-400 shadow-sm'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              Demo Mode Only
            </button>
          </div>
        </div>

        {/* Backend Health Check Inspector */}
        <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Activity size={14} className="text-emerald-400" /> Backend Health Status
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={checkServerHealth}
              isLoading={isHealthLoading}
              leftIcon={<RefreshCw size={12} />}
            >
              Refresh Status
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
              <span className="text-slate-500 block text-[10px]">API Status</span>
              <span className="font-mono font-bold text-emerald-400">
                {serverHealth?.status === 'ok' ? 'Online (200 OK)' : 'Offline / Degraded'}
              </span>
            </div>

            <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
              <span className="text-slate-500 block text-[10px]">Gemini Configured</span>
              <span
                className={`font-mono font-bold ${
                  serverHealth?.geminiConfigured ? 'text-cyan-400' : 'text-amber-400'
                }`}
              >
                {serverHealth?.geminiConfigured ? 'Yes (Live)' : 'No (Key Missing)'}
              </span>
            </div>

            <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
              <span className="text-slate-500 block text-[10px]">Active Model</span>
              <span className="font-mono text-slate-200 truncate block">
                {serverHealth?.geminiModel || 'gemini-2.5-flash'}
              </span>
            </div>

            <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
              <span className="text-slate-500 block text-[10px]">Repository Store</span>
              <span className="font-mono text-slate-200">
                {serverHealth?.databaseType || 'local_store'}
              </span>
            </div>
          </div>

          {!serverHealth?.geminiConfigured && (
            <p className="text-xs text-amber-300/90 leading-relaxed pt-1">
              To activate live Google Gemini neural analysis, set <code className="bg-slate-900 px-1 py-0.5 rounded text-amber-200 font-mono">GEMINI_API_KEY</code> in your server <code className="bg-slate-900 px-1 py-0.5 rounded text-amber-200 font-mono">.env</code> file and restart the server.
            </p>
          )}
        </div>
      </Card>

      {/* Privacy & Storage Preferences */}
      <Card className="p-6 border-slate-800 space-y-5">
        <h3 className="text-base font-bold text-white flex items-center gap-2 pb-3 border-b border-slate-800">
          <Lock size={18} className="text-cyan-400" />
          Privacy & Storage Controls
        </h3>

        {/* Consent for Saving Minimal Analysis Summary */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-slate-200">
              Consent: Save Minimal Analysis Summaries
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed max-w-lg">
              When enabled, ScamShield saves only the risk rating and summary in your local history to populate your activity log. Full message content is NEVER stored. Default is OFF.
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              updatePreferences({
                saveAnalysisHistoryConsent: !preferences.saveAnalysisHistoryConsent,
              })
            }
            className={`w-12 h-6 rounded-full transition-colors p-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-500 shrink-0 ${
              preferences.saveAnalysisHistoryConsent ? 'bg-cyan-500' : 'bg-slate-800'
            }`}
            role="switch"
            aria-checked={preferences.saveAnalysisHistoryConsent}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white transition-transform ${
                preferences.saveAnalysisHistoryConsent ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Reduced Motion Toggle */}
        <div className="flex items-start justify-between gap-4 pt-4 border-t border-slate-800">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-slate-200">
              Accessibility: Reduced Motion
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed max-w-lg">
              Disable background canvas animations, scanning radar sweeps, and transition effects.
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              updatePreferences({
                reducedMotion: !preferences.reducedMotion,
              })
            }
            className={`w-12 h-6 rounded-full transition-colors p-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-500 shrink-0 ${
              preferences.reducedMotion ? 'bg-cyan-500' : 'bg-slate-800'
            }`}
            role="switch"
            aria-checked={preferences.reducedMotion}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white transition-transform ${
                preferences.reducedMotion ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </Card>

      {/* Local Data Management */}
      <Card className="p-6 border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2 pb-3 border-b border-slate-800">
          <Trash2 size={18} className="text-rose-400" />
          Local Data Management
        </h3>

        <p className="text-xs text-slate-300 leading-relaxed">
          All your quiz scores, learning progress, simulation completions, and checklist items are saved in your local repository. You can export a copy of this data or clear it at any time.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleExportData}
            leftIcon={<Download size={14} />}
          >
            Export All Data (JSON)
          </Button>

          <Button
            variant="danger"
            size="sm"
            onClick={() => setShowClearModal(true)}
            leftIcon={<Trash2 size={14} />}
          >
            Clear All Stored Data
          </Button>
        </div>
      </Card>

      {/* Confirmation Modal */}
      <Modal
        isOpen={showClearModal}
        onClose={() => setShowClearModal(false)}
        title="Permanently Delete Local Data?"
        description="Are you sure you want to delete all recorded progress, quiz scores, and saved analysis summaries from this device? This action cannot be undone."
        confirmLabel="Confirm & Clear All Data"
        confirmVariant="danger"
        onConfirm={async () => {
          await clearAll();
          setShowClearModal(false);
        }}
      />
    </div>
  );
};
