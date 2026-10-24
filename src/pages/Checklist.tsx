import React, { useState } from 'react';
import {
  CheckSquare,
  Square,
  RotateCcw,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Sparkles,
} from 'lucide-react';
import { CHECKLIST_SECTIONS } from '../data/checklistData';
import { useProgress } from '../hooks/useProgress';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';

export const Checklist: React.FC = () => {
  const { progress, saveChecklist } = useProgress();

  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const [showResetModal, setShowResetModal] = useState(false);

  const completedIds = new Set(progress.checklistCompletedIds);

  const totalItems = CHECKLIST_SECTIONS.reduce((acc, sec) => acc + sec.items.length, 0);
  const completedCount = completedIds.size;
  const completionPercentage = totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 0;

  const toggleItem = async (itemId: string) => {
    const next = new Set(completedIds);
    if (next.has(itemId)) {
      next.delete(itemId);
    } else {
      next.add(itemId);
    }
    await saveChecklist(Array.from(next));
  };

  const toggleExpand = (itemId: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const handleMarkAllComplete = async () => {
    const allIds: string[] = [];
    CHECKLIST_SECTIONS.forEach((sec) => {
      sec.items.forEach((item) => allIds.push(item.id));
    });
    await saveChecklist(allIds);
  };

  const handleResetConfirm = async () => {
    await saveChecklist([]);
    setShowResetModal(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-2">
            <CheckSquare size={13} className="text-cyan-400" />
            <span>Interactive Verification Habits</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Digital Safety Checklist
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
            Actionable verification steps across five critical scenarios. Completed checks persist in your progress record.
          </p>
        </div>

        {/* Global Controls: Mark All & Reset */}
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleMarkAllComplete}>
            Mark All Done
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowResetModal(true)}
            className="text-rose-400 hover:text-rose-300 hover:bg-rose-950/30"
          >
            Reset
          </Button>
        </div>
      </div>

      {/* Completion Percentage Banner */}
      <Card className="p-5 border-slate-800 bg-slate-900/80">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
            Overall Completion Rate
          </span>
          <span className="text-xs font-mono font-bold text-cyan-400">
            {completedCount} of {totalItems} items ({completionPercentage}%)
          </span>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-gradient-to-r from-cyan-400 to-indigo-500 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </Card>

      {/* Checklist Sections */}
      <div className="space-y-6">
        {CHECKLIST_SECTIONS.map((section) => {
          const sectionDoneCount = section.items.filter((it) => completedIds.has(it.id)).length;
          const sectionTotal = section.items.length;

          return (
            <Card key={section.id} className="p-6 border-slate-800 space-y-4">
              <div className="flex items-start justify-between pb-3 border-b border-slate-800">
                <div>
                  <h3 className="font-bold text-base text-white">{section.title}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{section.description}</p>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800 shrink-0 font-bold">
                  {sectionDoneCount}/{sectionTotal}
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {section.items.map((item) => {
                  const isChecked = completedIds.has(item.id);
                  const isExpanded = Boolean(expandedItems[item.id]);

                  return (
                    <div
                      key={item.id}
                      className={`p-4 rounded-xl border transition ${
                        isChecked
                          ? 'bg-slate-900/90 border-cyan-500/30'
                          : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <button
                          type="button"
                          onClick={() => toggleItem(item.id)}
                          className="mt-0.5 text-cyan-400 hover:text-cyan-300 focus:outline-none transition shrink-0"
                          aria-label={`Toggle item: ${item.title}`}
                        >
                          {isChecked ? (
                            <CheckSquare size={19} className="text-cyan-400 fill-cyan-950" />
                          ) : (
                            <Square size={19} className="text-slate-500" />
                          )}
                        </button>

                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <h4
                              className={`text-sm font-semibold cursor-pointer ${
                                isChecked ? 'text-slate-300 line-through' : 'text-white'
                              }`}
                              onClick={() => toggleItem(item.id)}
                            >
                              {item.title}
                            </h4>

                            <button
                              type="button"
                              onClick={() => toggleExpand(item.id)}
                              className="text-xs text-slate-400 hover:text-slate-200 p-1 rounded hover:bg-slate-800 transition"
                              title="Toggle details"
                            >
                              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </button>
                          </div>

                          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                            {item.explanation}
                          </p>

                          {/* Expandable Deep Dive */}
                          {isExpanded && (
                            <div className="mt-3 pt-3 border-t border-slate-800 text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-3 rounded-lg border border-slate-800 animate-fade-in">
                              <strong className="text-cyan-400 block mb-1">In-Depth Guidance:</strong>
                              {item.deepDive}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Confirmation Modal for Reset */}
      <Modal
        isOpen={showResetModal}
        onClose={() => setShowResetModal(false)}
        title="Reset All Checklist Items?"
        description="Are you sure you want to clear your checklist progress? This will reset your checklist score contribution in your Cyber Safety Score."
        confirmLabel="Reset Checklist"
        confirmVariant="danger"
        onConfirm={handleResetConfirm}
      />
    </div>
  );
};
