import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  GraduationCap,
  Copy,
  Check,
  Shield,
  Briefcase,
  AlertTriangle,
  FileCheck,
  ArrowRight,
  BookOpen,
  Wifi,
} from 'lucide-react';
import {
  SAFE_RESPONSE_TEMPLATES,
  STUDENT_MICRO_LESSONS,
  RECRUITER_VERIFICATION_STEPS,
} from '../data/studentSafetyData';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const StudentSafety: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'templates' | 'verifier' | 'lessons'>('templates');

  const handleCopyTemplate = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-xs font-semibold text-indigo-300 mb-2">
          <GraduationCap size={13} className="text-cyan-400" />
          <span>Campus & Career Defense</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Student Safety & Career Protection
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
          Designed specifically for college students, interns, and fresh graduates. Protect your career aspirations against fraudulent recruiters, campus fee phishing, and hostel advance traps.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-slate-800 gap-4 text-xs font-bold uppercase tracking-wider">
        <button
          onClick={() => setActiveTab('templates')}
          className={`pb-3 px-1 border-b-2 transition ${
            activeTab === 'templates'
              ? 'border-cyan-400 text-cyan-300'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          Safe Response Templates
        </button>
        <button
          onClick={() => setActiveTab('verifier')}
          className={`pb-3 px-1 border-b-2 transition ${
            activeTab === 'verifier'
              ? 'border-cyan-400 text-cyan-300'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          Recruiter Verification Guide
        </button>
        <button
          onClick={() => setActiveTab('lessons')}
          className={`pb-3 px-1 border-b-2 transition ${
            activeTab === 'lessons'
              ? 'border-cyan-400 text-cyan-300'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          Campus Micro-Lessons
        </button>
      </div>

      {/* TAB 1: SAFE RESPONSE TEMPLATES */}
      {activeTab === 'templates' && (
        <div className="space-y-6">
          <div className="p-4 bg-indigo-950/20 border border-indigo-500/20 rounded-xl text-xs text-indigo-200 leading-relaxed">
            <strong className="text-cyan-300">How to Use These Templates:</strong> When an unverified recruiter, landlord, or buyer pressures you via WhatsApp or SMS, copy and send these professional responses to enforce boundaries without confrontation.
          </div>

          <div className="space-y-4">
            {SAFE_RESPONSE_TEMPLATES.map((tmpl) => {
              const isCopied = copiedId === tmpl.id;
              return (
                <Card key={tmpl.id} className="p-5 border-slate-800 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                        {tmpl.category}
                      </span>
                      <h3 className="font-bold text-sm sm:text-base text-white mt-1">
                        {tmpl.title}
                      </h3>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleCopyTemplate(tmpl.id, tmpl.templateText)}
                      leftIcon={isCopied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    >
                      {isCopied ? 'Copied to Clipboard!' : 'Copy Template'}
                    </Button>
                  </div>

                  <p className="text-xs text-slate-400 italic">
                    Situation: {tmpl.situation}
                  </p>

                  <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-200 whitespace-pre-wrap leading-relaxed select-all">
                    {tmpl.templateText}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    <strong className="text-slate-300">Why this works:</strong> {tmpl.explanation}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: RECRUITER VERIFICATION GUIDE */}
      {activeTab === 'verifier' && (
        <div className="space-y-6">
          <Card className="p-6 border-slate-800 space-y-5">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Briefcase size={18} className="text-cyan-400" />
              Four-Step Recruiter Verification Protocol
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Before submitting any application or signing an offer, run through this four-point test to filter out 99% of employment scams targeting Indian students.
            </p>

            <div className="space-y-4 pt-2">
              {RECRUITER_VERIFICATION_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 flex items-start gap-3.5"
                >
                  <div className="w-7 h-7 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30 flex items-center justify-center font-bold font-mono text-xs shrink-0">
                    {step.step}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white">{step.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-amber-950/20 border border-amber-500/30 rounded-xl flex items-start gap-3 text-xs text-amber-200">
              <AlertTriangle size={18} className="shrink-0 text-amber-400 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-amber-100">Golden Placement Rule:</strong> Any firm asking you to pay for laptops, registration fees, training, or ID cards is an employment scam. Genuine companies pay you; they NEVER charge you.
              </p>
            </div>
          </Card>
        </div>
      )}

      {/* TAB 3: CAMPUS MICRO-LESSONS */}
      {activeTab === 'lessons' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-5">
            {STUDENT_MICRO_LESSONS.map((lesson) => (
              <Card key={lesson.id} className="p-6 border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-500/30 font-mono">
                    {lesson.category}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">{lesson.duration}</span>
                </div>

                <h3 className="text-lg font-bold text-white">{lesson.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {lesson.summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 bg-emerald-950/20 border border-emerald-500/20 rounded-xl space-y-2">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      ✓ Safe Practices (DO)
                    </h5>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {lesson.doList.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-emerald-400 shrink-0">&bull;</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 bg-rose-950/20 border border-rose-500/20 rounded-xl space-y-2">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-rose-400">
                      ✗ Dangerous Mistakes (DON'T)
                    </h5>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {lesson.dontList.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-rose-400 shrink-0">&bull;</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Direct Quiz CTA */}
      <Card className="p-6 border-indigo-500/30 bg-indigo-950/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-white text-base">Test Your Campus Scam Detection</h4>
          <p className="text-xs text-slate-300 mt-0.5">
            Take the Fake Job & Internship Quiz to test your awareness against employment fraud.
          </p>
        </div>
        <NavLink to="/quiz/fake-jobs">
          <Button variant="primary" size="md" rightIcon={<ArrowRight size={15} />}>
            Start Student Quiz
          </Button>
        </NavLink>
      </Card>
    </div>
  );
};
