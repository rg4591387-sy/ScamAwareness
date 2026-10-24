import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Shield,
  Search,
  BookOpen,
  HelpCircle,
  GraduationCap,
  CheckSquare,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  BarChart2,
  RefreshCw,
  X,
  Lock,
  Compass,
} from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import { SCAM_CATEGORIES } from '../data/categories';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { RiskBadge } from '../components/ui/RiskBadge';

const DAILY_TIPS = [
  'Remember the Golden Rule of UPI: You enter your UPI PIN ONLY to send money, NEVER to receive money.',
  'State electricity boards send formal written notices, never personal 10-digit mobile SMS with same-day shutoff threats.',
  'There is NO such thing as "Digital Arrest" in Indian law. Police will never interrogate or arrest citizens on Skype.',
  'Legitimate corporate employers NEVER ask candidates to pay registration fees or laptop deposits.',
  'Before entering passwords on a university portal, verify the domain ends in .ac.in or .edu, not .net or .info.',
  'Do not dial codes like *401* on your phone dialer; they activate unconditional call forwarding to scammers.',
];

export const Overview: React.FC = () => {
  const navigate = useNavigate();
  const { progress, scoreBreakdown } = useProgress();

  const [quickInput, setQuickInput] = useState('');
  const [tipIndex, setTipIndex] = useState(0);
  const [tipDismissed, setTipDismissed] = useState(false);

  const handleQuickAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickInput.trim()) return;
    navigate('/analyzer', { state: { prefilledMessage: quickInput } });
  };

  const handleNextTip = () => {
    setTipIndex((prev) => (prev + 1) % DAILY_TIPS.length);
  };

  const latestQuiz = progress.quizAttempts[0];
  const isNewUser = progress.scansCount === 0 && progress.quizAttempts.length === 0;

  return (
    <div className="space-y-8 pb-12 animate-fade-in">
      {/* Dismissible Daily Cybersecurity Tip */}
      {!tipDismissed && (
        <div className="p-3.5 bg-indigo-950/40 border border-indigo-500/30 rounded-xl flex items-center justify-between gap-3 text-xs text-indigo-200">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="p-1 bg-indigo-900/60 rounded text-cyan-300 shrink-0 font-bold font-mono">
              TIP
            </span>
            <span className="truncate">{DAILY_TIPS[tipIndex]}</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleNextTip}
              className="p-1 hover:text-white rounded hover:bg-indigo-900/50 transition"
              title="Next Tip"
            >
              <RefreshCw size={13} />
            </button>
            <button
              onClick={() => setTipDismissed(true)}
              className="p-1 hover:text-white rounded hover:bg-indigo-900/50 transition"
              title="Dismiss"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative rounded-2xl bg-gradient-to-br from-slate-900/90 via-[#0B0F19]/95 to-slate-950 border border-slate-800 p-6 sm:p-10 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-300">
            <Shield size={13} className="text-cyan-400" />
            <span>Digital Scam Awareness Platform 2.0</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Think Before <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              You Click.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            ScamShield AI trains students and internet users to recognize digital manipulation, test instincts in realistic scam simulations, and practice safe financial hygiene.
          </p>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <NavLink to="/analyzer">
              <Button variant="primary" size="lg" leftIcon={<Search size={18} />}>
                Analyze a Message
              </Button>
            </NavLink>
            <NavLink to="/library">
              <Button variant="secondary" size="lg" leftIcon={<BookOpen size={18} />}>
                Learn to Spot Scams
              </Button>
            </NavLink>
            <NavLink to="/student-safety">
              <Button variant="outline" size="lg" leftIcon={<GraduationCap size={18} />}>
                Student Safety Track
              </Button>
            </NavLink>
          </div>
        </div>

        {/* Compact Quick Message Analyzer Form */}
        <div className="relative z-10 mt-8 pt-6 border-t border-slate-800/80">
          <form onSubmit={handleQuickAnalyze} className="max-w-2xl">
            <label htmlFor="quick-msg" className="block text-xs font-semibold text-slate-400 mb-2">
              Quick Test: Paste any suspicious text, email, or offer preview:
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                id="quick-msg"
                type="text"
                value={quickInput}
                onChange={(e) => setQuickInput(e.target.value)}
                placeholder="e.g. 'Dear SBI user, KYC blocked today. Update: http://sbi-kyc.online'..."
                className="flex-1 bg-slate-950/80 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <Button type="submit" variant="primary" disabled={!quickInput.trim()}>
                Scan Preview
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Real Statistics / Progress Snapshot */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Real Scan Count */}
        <Card className="p-4">
          <span className="text-xs text-slate-400 font-medium block">Total Scans Run</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold font-mono text-cyan-400">
              {progress.scansCount}
            </span>
            <span className="text-xs text-slate-500">analyses</span>
          </div>
          <span className="text-[11px] text-slate-500 mt-1 block">
            {progress.scansCount === 0 ? 'No scans run yet' : 'Logged in local repository'}
          </span>
        </Card>

        {/* Latest Quiz Score */}
        <Card className="p-4">
          <span className="text-xs text-slate-400 font-medium block">Latest Quiz Score</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold font-mono text-indigo-400">
              {latestQuiz ? `${latestQuiz.percentage}%` : '—'}
            </span>
            <span className="text-xs text-slate-500">
              {latestQuiz ? `${latestQuiz.score}/${latestQuiz.total}` : 'no attempts'}
            </span>
          </div>
          <span className="text-[11px] text-slate-500 mt-1 block truncate">
            {latestQuiz ? latestQuiz.categoryName : 'Take your first quiz'}
          </span>
        </Card>

        {/* Completed Learning Topics */}
        <Card className="p-4">
          <span className="text-xs text-slate-400 font-medium block">Completed Categories</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold font-mono text-emerald-400">
              {progress.completedCategories.length}
            </span>
            <span className="text-xs text-slate-500">/ 12 topics</span>
          </div>
          <span className="text-[11px] text-slate-500 mt-1 block">
            {progress.completedCategories.length === 0 ? 'Start in Scam Library' : 'Mastered vectors'}
          </span>
        </Card>

        {/* Safety Checklist Completion */}
        <Card className="p-4">
          <span className="text-xs text-slate-400 font-medium block">Checklist Items Done</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold font-mono text-amber-400">
              {progress.checklistCompletedIds.length}
            </span>
            <span className="text-xs text-slate-500">/ 20 checks</span>
          </div>
          <span className="text-[11px] text-slate-500 mt-1 block">
            {progress.checklistCompletedIds.length === 0 ? 'Review safety habits' : 'Verified protocols'}
          </span>
        </Card>
      </section>

      {/* Cyber Safety Score Card & Weekly Challenge Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Transparent Cyber Safety Score Card */}
        <Card className="lg:col-span-2 p-6 border-slate-800">
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Awareness Analytics
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Transparent Cyber Safety Score
              </h3>
            </div>
            <div className="text-right">
              <span className="text-3xl font-extrabold font-mono text-cyan-400">
                {scoreBreakdown.totalScore}
              </span>
              <span className="text-xs text-slate-500 block">out of 100</span>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed mb-5">
            This educational score reflects your verified activity across quizzes (35%), category learning (25%), simulation decisions (20%), and safety checklist habits (20%). It is NOT a device security certificate or guarantee against fraud.
          </p>

          {/* Component Breakdown Progress Bars */}
          <div className="space-y-3 pt-2 border-t border-slate-800/80">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">Quiz Accuracy ({scoreBreakdown.averageQuizAccuracy}%)</span>
                <span className="font-mono text-slate-200">
                  {scoreBreakdown.quizComponent} / {scoreBreakdown.quizComponentMax} pts
                </span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-indigo-500 h-1.5 rounded-full"
                  style={{ width: `${(scoreBreakdown.quizComponent / scoreBreakdown.quizComponentMax) * 100}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">Category Learning ({scoreBreakdown.completedCategoriesCount}/12)</span>
                <span className="font-mono text-slate-200">
                  {scoreBreakdown.categoryComponent} / {scoreBreakdown.categoryComponentMax} pts
                </span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-emerald-500 h-1.5 rounded-full"
                  style={{ width: `${(scoreBreakdown.categoryComponent / scoreBreakdown.categoryComponentMax) * 100}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">Simulations Completed ({scoreBreakdown.completedSimulationsCount}/6)</span>
                <span className="font-mono text-slate-200">
                  {scoreBreakdown.simulationComponent} / {scoreBreakdown.simulationComponentMax} pts
                </span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-cyan-500 h-1.5 rounded-full"
                  style={{ width: `${(scoreBreakdown.simulationComponent / scoreBreakdown.simulationComponentMax) * 100}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">Checklist Completion ({scoreBreakdown.completedChecklistCount}/20)</span>
                <span className="font-mono text-slate-200">
                  {scoreBreakdown.checklistComponent} / {scoreBreakdown.checklistComponentMax} pts
                </span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-amber-500 h-1.5 rounded-full"
                  style={{ width: `${(scoreBreakdown.checklistComponent / scoreBreakdown.checklistComponentMax) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-800 flex justify-between items-center text-xs">
            <span className="text-slate-400">
              {isNewUser ? 'New profile: complete lessons to grow score' : 'Calculated from actual records'}
            </span>
            <NavLink to="/progress" className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1">
              Full Analytics &rarr;
            </NavLink>
          </div>
        </Card>

        {/* Weekly Cyber Challenge Card */}
        <Card className="p-6 border-slate-800 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-[11px] font-bold text-indigo-300 mb-3">
              <Sparkles size={12} className="text-cyan-400" />
              <span>Weekly Challenge</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Campus Scam Detection</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Test your ability to spot 5 high-priority threats targeting Indian college students and freshers this week.
            </p>
            <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 space-y-1.5 text-xs text-slate-400 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">&bull;</span>
                <span>Fake placement offer letter check</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">&bull;</span>
                <span>QR code reverse-charge trap</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">&bull;</span>
                <span>Digital arrest legal reality test</span>
              </div>
            </div>
          </div>

          <NavLink to="/quiz/weekly">
            <Button variant="primary" className="w-full" rightIcon={<ArrowRight size={15} />}>
              Start Weekly Challenge
            </Button>
          </NavLink>
        </Card>
      </section>

      {/* Featured Entry: Student Safety Track */}
      <section className="rounded-xl p-6 bg-gradient-to-r from-cyan-950/40 via-indigo-950/40 to-slate-900 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg shadow-cyan-950/20">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-cyan-900/40 text-cyan-300 text-xs font-bold border border-cyan-500/30">
            <GraduationCap size={13} />
            <span>Dedicated Campus Module</span>
          </div>
          <h3 className="text-xl font-bold text-white">Student Safety & Career Protection</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Practical defense guides for college students: before-you-apply recruiter checklists, copy-paste safe response templates, and shared hostel Wi-Fi rules.
          </p>
        </div>
        <NavLink to="/student-safety" className="shrink-0 w-full sm:w-auto">
          <Button variant="primary" size="md" rightIcon={<ArrowRight size={16} />}>
            Open Student Track
          </Button>
        </NavLink>
      </section>

      {/* 12 Scam Categories Grid Preview */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">Scam Library — Twelve Categories</h2>
            <p className="text-xs text-slate-400">
              Select any category to study manipulation techniques, case studies, and take its dedicated quiz.
            </p>
          </div>
          <NavLink to="/library" className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
            View All Categories &rarr;
          </NavLink>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SCAM_CATEGORIES.map((cat) => {
            const isCompleted = progress.completedCategories.includes(cat.id);
            return (
              <NavLink key={cat.id} to={`/library/${cat.id}`} className="group">
                <Card hoverEffect glow="cyan" className="h-full flex flex-col justify-between p-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {cat.badge}
                      </span>
                      <RiskBadge level={cat.riskLevel} size="sm" showIcon={false} />
                    </div>
                    <h3 className="font-bold text-slate-100 text-sm group-hover:text-cyan-300 transition-colors mb-1.5">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {cat.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-mono text-[11px]">
                      {cat.difficulty}
                    </span>
                    <span
                      className={`text-[11px] font-semibold ${
                        isCompleted ? 'text-emerald-400' : 'text-slate-400 group-hover:text-cyan-400'
                      }`}
                    >
                      {isCompleted ? '✓ Completed' : 'Study & Quiz →'}
                    </span>
                  </div>
                </Card>
              </NavLink>
            );
          })}
        </div>
      </section>
    </div>
  );
};
