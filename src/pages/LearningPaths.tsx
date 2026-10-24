import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Compass,
  CheckCircle2,
  Clock,
  ArrowRight,
  BookOpen,
  Award,
  Sparkles,
  Shield,
} from 'lucide-react';
import { LEARNING_TRACKS } from '../data/learningPaths';
import { useProgress } from '../hooks/useProgress';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const LearningPaths: React.FC = () => {
  const { progress } = useProgress();

  // Determine recommended next track from actual completed modules / categories
  const completedCats = progress.completedCategories;
  const firstUnfinishedTrack =
    LEARNING_TRACKS.find((track) =>
      track.modules.some((m) => m.quizCategoryTarget && !completedCats.includes(m.quizCategoryTarget))
    ) || LEARNING_TRACKS[0];

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-2">
          <Compass size={13} className="text-cyan-400" />
          <span>Structured Learning Journey</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Personalized Learning Paths
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
          Progress from foundational digital hygiene to advanced social engineering defense across 6 structured levels.
        </p>
      </div>

      {/* Recommended Next Step Banner (Calculated from real activity) */}
      <Card className="p-6 border-indigo-500/40 bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-950 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-lg">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400">
            <Sparkles size={13} />
            <span>Recommended Next Track</span>
          </div>
          <h3 className="text-lg font-bold text-white">{firstUnfinishedTrack.title}</h3>
          <p className="text-xs text-slate-300 max-w-lg leading-relaxed">
            {firstUnfinishedTrack.description}
          </p>
        </div>

        <a href={`#${firstUnfinishedTrack.id}`}>
          <Button variant="primary" size="md" rightIcon={<ArrowRight size={15} />}>
            Resume Learning
          </Button>
        </a>
      </Card>

      {/* Six Structured Tracks */}
      <div className="space-y-6">
        {LEARNING_TRACKS.map((track) => {
          return (
            <Card key={track.id} id={track.id} className="p-6 border-slate-800 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-bold text-cyan-400 font-mono block mb-1">
                    {track.level}
                  </span>
                  <h3 className="text-lg font-bold text-white">{track.title}</h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {track.description}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 shrink-0 font-mono">
                  <Clock size={13} />
                  <span>~{track.estimatedMinutes} mins</span>
                </div>
              </div>

              {/* Modules within this track */}
              <div className="space-y-4">
                {track.modules.map((module) => {
                  const targetCat = module.quizCategoryTarget;
                  const isCatDone = targetCat ? completedCats.includes(targetCat) : false;

                  return (
                    <div
                      key={module.id}
                      className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 ${
                              isCatDone
                                ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                                : 'bg-slate-800 text-slate-400 border border-slate-700'
                            }`}
                          >
                            {isCatDone ? '✓' : <BookOpen size={12} />}
                          </span>
                          <h4 className="font-bold text-sm text-slate-100">{module.title}</h4>
                        </div>

                        {targetCat && (
                          <div className="flex items-center gap-2">
                            <NavLink to={`/library/${targetCat}`}>
                              <Button variant="outline" size="sm">
                                Read Guide
                              </Button>
                            </NavLink>
                            <NavLink to={`/quiz/${targetCat}`}>
                              <Button variant="secondary" size="sm">
                                {isCatDone ? 'Retake Quiz' : 'Take Quiz'}
                              </Button>
                            </NavLink>
                          </div>
                        )}
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed pl-8">
                        {module.summary}
                      </p>

                      <div className="pl-8 pt-1">
                        <ul className="space-y-1 text-xs text-slate-400">
                          {module.keyPoints.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-cyan-400 mt-0.5">&bull;</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
