import React, { useState } from 'react';
import {
  Copy,
  Check,
  RotateCcw,
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  ShieldAlert,
  Sparkles,
  Info,
} from 'lucide-react';
import { AnalysisResponse } from '../../types';
import { RiskBadge } from '../ui/RiskBadge';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

interface AnalyzerResultsProps {
  result: AnalysisResponse;
  onReset: () => void;
}

export const AnalyzerResults: React.FC<AnalyzerResultsProps> = ({ result, onReset }) => {
  const [copied, setCopied] = useState(false);
  const [expandedSigns, setExpandedSigns] = useState<Record<number, boolean>>({ 0: true });
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);

  const toggleSign = (idx: number) => {
    setExpandedSigns((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const handleCopySummary = async () => {
    const textToCopy = `ScamShield AI Analysis
Risk Level: ${result.riskLevel} (${result.confidence} Confidence)
Summary: ${result.summary}

Top Warning Signs:
${result.warningSigns.map((w, i) => `${i + 1}. ${w.title}: ${w.explanation}`).join('\n')}

Recommended Actions:
${result.recommendedActions.map((a, i) => `- ${a}`).join('\n')}

Disclaimer: ${result.educationalDisclaimer}`;

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Banner: Mode Indicator */}
      {result.isDemo ? (
        <div className="p-3 bg-amber-950/40 border border-amber-500/40 rounded-xl flex items-center justify-between text-xs text-amber-300">
          <div className="flex items-center gap-2">
            <Info size={16} className="text-amber-400 shrink-0" />
            <span>
              <strong>DEMO MODE ANALYSIS:</strong> Generated using offline educational heuristic rules. Add GEMINI_API_KEY for live Google Gemini neural analysis.
            </span>
          </div>
        </div>
      ) : (
        <div className="p-3 bg-cyan-950/40 border border-cyan-500/40 rounded-xl flex items-center justify-between text-xs text-cyan-300">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-cyan-400 shrink-0" />
            <span>
              <strong>LIVE GEMINI NEURAL ANALYSIS:</strong> Evaluated by Google Gemini cyber educator.
            </span>
          </div>
        </div>
      )}

      {/* Primary Risk Card */}
      <Card className="p-6 border-slate-700/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono text-slate-400 block mb-1">
              Analysis Evaluation Report &bull; {new Date(result.analyzedAt).toLocaleTimeString()}
            </span>
            <div className="flex items-center gap-3">
              <RiskBadge level={result.riskLevel} size="lg" />
              <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                {result.confidence} Confidence
              </span>
              {result.categoryHint && (
                <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-950/60 text-indigo-300 border border-indigo-500/30">
                  {result.categoryHint}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopySummary}
              leftIcon={copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            >
              {copied ? 'Copied!' : 'Copy Summary'}
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={onReset}
              leftIcon={<RotateCcw size={14} />}
            >
              Analyze Another
            </Button>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="mt-5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
            Executive Summary
          </h4>
          <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-medium">
            {result.summary}
          </p>
        </div>
      </Card>

      {/* Warning Signs (Expandable Accordions) */}
      {result.warningSigns && result.warningSigns.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
              <ShieldAlert size={16} className="text-rose-400" />
              Identified Warning Signs ({result.warningSigns.length})
            </h4>
            <span className="text-xs text-slate-400">Click to expand evidence</span>
          </div>

          <div className="space-y-3">
            {result.warningSigns.map((sign, idx) => {
              const isOpen = expandedSigns[idx];
              return (
                <Card
                  key={idx}
                  className="p-4 border-slate-800 hover:border-slate-700 transition cursor-pointer"
                  onClick={() => toggleSign(idx)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-400 flex items-center justify-center text-xs font-bold font-mono">
                        {idx + 1}
                      </div>
                      <h5 className="text-sm font-bold text-slate-100">{sign.title}</h5>
                    </div>
                    {isOpen ? (
                      <ChevronUp size={18} className="text-slate-400" />
                    ) : (
                      <ChevronDown size={18} className="text-slate-400" />
                    )}
                  </div>

                  {isOpen && (
                    <div className="mt-3.5 pt-3.5 border-t border-slate-800 space-y-2.5 text-xs">
                      {sign.quotedOrParaphrasedEvidence && (
                        <div className="p-2.5 bg-slate-950/70 border-l-2 border-l-rose-500 rounded font-mono text-slate-300">
                          <span className="text-slate-400 block text-[10px] uppercase tracking-wider mb-0.5">
                            Quoted Evidence:
                          </span>
                          &ldquo;{sign.quotedOrParaphrasedEvidence}&rdquo;
                        </div>
                      )}
                      <p className="text-slate-300 leading-relaxed font-sans">{sign.explanation}</p>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* Positive Signals (if any) */}
      {result.positiveSignals && result.positiveSignals.length > 0 && (
        <Card className="p-4 border-emerald-500/20 bg-emerald-950/10">
          <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
            <CheckCircle2 size={15} /> Positive / Mitigating Signals
          </h4>
          <ul className="space-y-1.5 text-xs text-slate-300">
            {result.positiveSignals.map((sig, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">&bull;</span>
                <span>{sig}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* Recommended Next Steps */}
      <Card className="p-5 border-cyan-500/30 bg-indigo-950/20">
        <h4 className="text-sm font-bold text-cyan-300 mb-3 flex items-center gap-2">
          <AlertTriangle size={16} /> Recommended Action Steps
        </h4>
        <div className="space-y-2">
          {result.recommendedActions.map((action, idx) => (
            <div
              key={idx}
              className="p-3 bg-slate-900/80 border border-slate-800 rounded-lg text-xs text-slate-200 flex items-start gap-2.5"
            >
              <span className="w-5 h-5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30 flex items-center justify-center text-[10px] font-bold font-mono shrink-0">
                {idx + 1}
              </span>
              <span className="leading-relaxed">{action}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Expandable Technical & Link Safety Limitations */}
      <Card className="p-4 border-slate-800">
        <button
          onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
          className="w-full flex items-center justify-between text-xs font-semibold text-slate-400 hover:text-slate-200 transition"
        >
          <span>Why was this flagged? (Technical Assessment & Limitations)</span>
          {showTechnicalDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {showTechnicalDetails && (
          <div className="mt-3 pt-3 border-t border-slate-800 space-y-3 text-xs text-slate-400 leading-relaxed">
            <div>
              <strong className="text-slate-300 block mb-1">Link Safety Notice:</strong>
              {result.linkSafety}
            </div>
            <div>
              <strong className="text-slate-300 block mb-1">Educational AI Disclaimer:</strong>
              {result.educationalDisclaimer}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};
