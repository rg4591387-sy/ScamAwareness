import React from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  ShieldAlert,
  HelpCircle,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import { SCAM_CATEGORIES } from '../data/categories';
import { useProgress } from '../hooks/useProgress';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { RiskBadge } from '../components/ui/RiskBadge';

export const CategoryDetail: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const { progress, markCategoryCompleted } = useProgress();

  const category = SCAM_CATEGORIES.find((c) => c.id === categoryId);

  if (!category) {
    return (
      <Card className="text-center py-12">
        <HelpCircle size={40} className="mx-auto text-slate-500 mb-3" />
        <h3 className="text-lg font-bold text-slate-200">Category Not Found</h3>
        <p className="text-sm text-slate-400 mt-1 mb-6">
          The requested scam category &ldquo;{categoryId}&rdquo; does not exist.
        </p>
        <NavLink to="/library">
          <Button variant="secondary">Back to Scam Library</Button>
        </NavLink>
      </Card>
    );
  }

  const isCompleted = progress.completedCategories.includes(category.id);

  const handleToggleLearned = async () => {
    await markCategoryCompleted(category.id);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      {/* Back Link and Navigation Bar */}
      <div className="flex items-center justify-between">
        <NavLink
          to="/library"
          className="text-xs font-medium text-slate-400 hover:text-cyan-300 flex items-center gap-1.5 transition"
        >
          <ArrowLeft size={14} /> Back to Library
        </NavLink>

        <div className="flex items-center gap-2">
          <Button
            variant={isCompleted ? 'secondary' : 'outline'}
            size="sm"
            onClick={handleToggleLearned}
            leftIcon={<ShieldCheck size={14} className={isCompleted ? 'text-emerald-400' : ''} />}
          >
            {isCompleted ? 'Marked as Learned ✓' : 'Mark as Learned'}
          </Button>

          <NavLink to={`/quiz/${category.id}`}>
            <Button variant="primary" size="sm" rightIcon={<ArrowRight size={14} />}>
              Take Category Quiz
            </Button>
          </NavLink>
        </div>
      </div>

      {/* Header Profile */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2.5">
          <RiskBadge level={category.riskLevel} size="md" />
          <span className="text-xs px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">
            {category.badge}
          </span>
          <span className="text-xs px-2.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 font-mono">
            {category.difficulty} Level
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {category.name}
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
          {category.shortDescription}
        </p>
      </div>

      {/* Section 1: How the Scam Works */}
      <Card className="p-6 border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <BookOpen size={18} className="text-cyan-400" />
          How This Scam Works
        </h3>
        <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {category.howItWorks.map((step, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-lg border border-slate-800/80">
              <span className="w-6 h-6 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30 flex items-center justify-center font-bold font-mono text-xs shrink-0">
                {idx + 1}
              </span>
              <p className="flex-1">{step}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Section 2: Key Warning Signs */}
      <Card className="p-6 border-rose-500/20 bg-rose-950/10 space-y-4">
        <h3 className="text-base font-bold text-rose-300 flex items-center gap-2">
          <ShieldAlert size={18} className="text-rose-400" />
          Key Warning Signs & Red Flags
        </h3>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
          {category.warningSigns.map((sign, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="text-rose-400 font-bold shrink-0 mt-0.5">&bull;</span>
              <span className="leading-relaxed">{sign}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Section 3: Realistic Fictional Case Study */}
      <Card className="p-6 border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Sparkles size={18} className="text-indigo-400" />
            Realistic Fictional Scenario
          </h3>
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
            Simulated Case Study
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {category.realisticExample.scenario}
        </p>

        {/* Suspicious Artifact Box */}
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-200 whitespace-pre-wrap leading-relaxed">
          {category.realisticExample.suspiciousArtifact}
        </div>

        <div className="space-y-2 pt-2">
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
            Red Flags Embedded Above:
          </span>
          <div className="space-y-1.5">
            {category.realisticExample.redFlags.map((flag, idx) => (
              <div
                key={idx}
                className="text-xs text-amber-300 bg-amber-950/30 border border-amber-500/20 rounded p-2 flex items-start gap-2"
              >
                <AlertTriangle size={13} className="shrink-0 text-amber-400 mt-0.5" />
                <span>{flag}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Section 4: Manipulation Techniques */}
      <Card className="p-6 border-slate-800 space-y-3">
        <h3 className="text-base font-bold text-white">Common Manipulation Techniques</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {category.manipulationTechniques.map((tech, idx) => (
            <div
              key={idx}
              className="p-3 bg-slate-900/80 border border-slate-800 rounded-lg text-xs font-medium text-slate-200"
            >
              <span className="text-cyan-400 font-bold block mb-1">Technique {idx + 1}</span>
              {tech}
            </div>
          ))}
        </div>
      </Card>

      {/* Section 5: Student & Campus Considerations */}
      {category.studentConsiderations && category.studentConsiderations.length > 0 && (
        <Card className="p-6 border-indigo-500/30 bg-indigo-950/20 space-y-3">
          <div className="flex items-center gap-2">
            <GraduationCap size={18} className="text-indigo-400" />
            <h3 className="text-base font-bold text-white">Student & Campus Context</h3>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
            {category.studentConsiderations.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-indigo-400 mt-0.5">&bull;</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* Section 6: How to Stay Safe */}
      <Card className="p-6 border-emerald-500/20 bg-emerald-950/10 space-y-3">
        <h3 className="text-base font-bold text-emerald-300 flex items-center gap-2">
          <CheckCircle2 size={18} className="text-emerald-400" />
          How to Stay Safe (Prevention Rules)
        </h3>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
          {category.howToStaySafe.map((rule, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="text-emerald-400 font-bold shrink-0 mt-0.5">&#10003;</span>
              <span className="leading-relaxed">{rule}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Section 7: What to Do If Affected */}
      <Card className="p-6 border-slate-800 space-y-3">
        <h3 className="text-base font-bold text-slate-100">
          Incident Response: What to Do If Affected
        </h3>
        <div className="space-y-2 text-xs sm:text-sm text-slate-300">
          {category.whatToDoIfAffected.map((action, idx) => (
            <div key={idx} className="p-2.5 bg-slate-900 rounded border border-slate-800 flex items-start gap-2">
              <span className="font-mono font-bold text-cyan-400 shrink-0">{idx + 1}.</span>
              <span className="leading-relaxed">{action}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Bottom Action Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-slate-900/90 rounded-2xl border border-slate-800">
        <div>
          <h4 className="font-bold text-white text-sm">Ready to test your instincts?</h4>
          <p className="text-xs text-slate-400 mt-0.5">
            Take the dedicated {category.name} Quiz to earn awareness points.
          </p>
        </div>
        <NavLink to={`/quiz/${category.id}`}>
          <Button variant="primary" size="md" rightIcon={<ArrowRight size={15} />}>
            Start Category Quiz
          </Button>
        </NavLink>
      </div>
    </div>
  );
};
