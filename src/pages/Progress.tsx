import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  BarChart2,
  Trash2,
  Download,
  Award,
  BookOpen,
  HelpCircle,
  FlaskConical,
  CheckSquare,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  History,
} from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';

export const Progress: React.FC = () => {
  const { progress, scoreBreakdown, clearAll } = useProgress();
  const [showClearModal, setShowClearModal] = useState(false);

  const handleExportData = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(progress, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `scamshield_progress_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const isBrandNew =
    progress.scansCount === 0 &&
    progress.quizAttempts.length === 0 &&
    progress.completedCategories.length === 0;

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-2">
            <BarChart2 size={13} className="text-cyan-400" />
            <span>Activity & Accuracy Metrics</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            My Progress & Cyber Safety Score
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
            Real activity metrics recorded on this device. Scores are educational indicators and reflect genuine quiz, lesson, and simulation completions.
          </p>
        </div>

        {/* Export and Clear Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleExportData}
            leftIcon={<Download size={14} />}
          >
            Export JSON
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowClearModal(true)}
            leftIcon={<Trash2 size={14} />}
            className="text-rose-400 hover:text-rose-300 hover:bg-rose-950/30"
          >
            Clear Data
          </Button>
        </div>
      </div>

      {/* Cyber Safety Score Hero Panel */}
      <Card className="p-6 border-slate-700/80 bg-gradient-to-br from-[#0F172A] to-slate-950 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
              Educational Awareness Index
            </span>
            <h2 className="text-xl font-bold text-white mt-1">
              Your Cyber Safety Score
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Transparent 100-point calculation based on real recorded activity
            </p>
          </div>

          <div className="text-left sm:text-right">
            <span className="text-4xl sm:text-5xl font-extrabold font-mono text-cyan-400">
              {scoreBreakdown.totalScore}
            </span>
            <span className="text-xs text-slate-500 block">/ 100 points</span>
          </div>
        </div>

        {/* 4 Score Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 1. Quiz Component */}
          <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400 font-semibold">Quiz Accuracy</span>
              <span className="font-mono text-xs font-bold text-indigo-400">
                {scoreBreakdown.quizComponent} / {scoreBreakdown.quizComponentMax} pts
              </span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-indigo-500 h-1.5 rounded-full"
                style={{ width: `${(scoreBreakdown.quizComponent / scoreBreakdown.quizComponentMax) * 100}%` }}
              />
            </div>
            <p className="text-[11px] text-slate-500">
              {scoreBreakdown.averageQuizAccuracy}% avg across {progress.quizAttempts.length} attempts
            </p>
          </div>

          {/* 2. Category Learning */}
          <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400 font-semibold">Categories</span>
              <span className="font-mono text-xs font-bold text-emerald-400">
                {scoreBreakdown.categoryComponent} / {scoreBreakdown.categoryComponentMax} pts
              </span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-emerald-500 h-1.5 rounded-full"
                style={{ width: `${(scoreBreakdown.categoryComponent / scoreBreakdown.categoryComponentMax) * 100}%` }}
              />
            </div>
            <p className="text-[11px] text-slate-500">
              {scoreBreakdown.completedCategoriesCount} of 12 categories mastered
            </p>
          </div>

          {/* 3. Simulations */}
          <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400 font-semibold">Simulations</span>
              <span className="font-mono text-xs font-bold text-cyan-400">
                {scoreBreakdown.simulationComponent} / {scoreBreakdown.simulationComponentMax} pts
              </span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-cyan-500 h-1.5 rounded-full"
                style={{ width: `${(scoreBreakdown.simulationComponent / scoreBreakdown.simulationComponentMax) * 100}%` }}
              />
            </div>
            <p className="text-[11px] text-slate-500">
              {scoreBreakdown.completedSimulationsCount} of 6 sandbox scenarios
            </p>
          </div>

          {/* 4. Safety Checklist */}
          <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400 font-semibold">Checklist Habits</span>
              <span className="font-mono text-xs font-bold text-amber-400">
                {scoreBreakdown.checklistComponent} / {scoreBreakdown.checklistComponentMax} pts
              </span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-amber-500 h-1.5 rounded-full"
                style={{ width: `${(scoreBreakdown.checklistComponent / scoreBreakdown.checklistComponentMax) * 100}%` }}
              />
            </div>
            <p className="text-[11px] text-slate-500">
              {scoreBreakdown.completedChecklistCount} of 20 safety habits verified
            </p>
          </div>
        </div>

        {/* Disclaimer Notice */}
        <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800 text-xs text-slate-400 leading-relaxed">
          <strong className="text-slate-300">Methodology & Transparency:</strong> This score is designed exclusively as an educational incentive to motivate threat recognition practice. It does not certify device immunity or guarantee that the user will never encounter fraud.
        </div>
      </Card>

      {/* Quick Action CTAs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <NavLink to="/quiz">
          <Card hoverEffect className="p-4 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-sm text-white">Retake a Quiz</h4>
              <p className="text-xs text-slate-400">Boost accuracy points</p>
            </div>
            <ArrowRight size={16} className="text-cyan-400" />
          </Card>
        </NavLink>

        <NavLink to="/library">
          <Card hoverEffect className="p-4 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-sm text-white">Continue Learning</h4>
              <p className="text-xs text-slate-400">Master remaining categories</p>
            </div>
            <ArrowRight size={16} className="text-cyan-400" />
          </Card>
        </NavLink>

        <NavLink to="/checklist">
          <Card hoverEffect className="p-4 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-sm text-white">Open Checklist</h4>
              <p className="text-xs text-slate-400">Complete daily habits</p>
            </div>
            <ArrowRight size={16} className="text-cyan-400" />
          </Card>
        </NavLink>
      </div>

      {/* Recent Quiz Attempts Activity History */}
      <Card className="p-6 border-slate-800 space-y-4">
        <h3 className="font-bold text-base text-white flex items-center gap-2">
          <History size={18} className="text-indigo-400" />
          Recent Quiz Attempts ({progress.quizAttempts.length})
        </h3>

        {progress.quizAttempts.length > 0 ? (
          <div className="space-y-2.5">
            {progress.quizAttempts.slice(0, 10).map((attempt) => (
              <div
                key={attempt.id}
                className="p-3.5 bg-slate-900/60 rounded-xl border border-slate-800 flex items-center justify-between text-xs"
              >
                <div>
                  <h4 className="font-semibold text-slate-200">{attempt.categoryName}</h4>
                  <span className="text-[11px] text-slate-500 font-mono">
                    {new Date(attempt.completedAt).toLocaleDateString()} at{' '}
                    {new Date(attempt.completedAt).toLocaleTimeString()}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-slate-400 font-mono">
                    {attempt.score}/{attempt.total} correct
                  </span>
                  <span
                    className={`font-mono font-bold px-2 py-0.5 rounded text-xs ${
                      attempt.percentage >= 70
                        ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30'
                        : 'bg-amber-950/60 text-amber-400 border border-amber-500/30'
                    }`}
                  >
                    {attempt.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-slate-500 italic py-4 text-center">
            No quiz attempts recorded yet. Take your first category quiz to record metrics!
          </p>
        )}
      </Card>

      {/* Confirmation Modal for Clearing Progress */}
      <Modal
        isOpen={showClearModal}
        onClose={() => setShowClearModal(false)}
        title="Clear All Recorded Progress?"
        description="This will permanently delete all your quiz attempts, completed categories, simulation history, and saved analysis records from this device. This action cannot be undone."
        confirmLabel="Yes, Clear All My Data"
        confirmVariant="danger"
        onConfirm={async () => {
          await clearAll();
          setShowClearModal(false);
        }}
      />
    </div>
  );
};
