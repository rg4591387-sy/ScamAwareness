import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { HelpCircle, Sparkles, Shuffle, ArrowRight, Award, CheckCircle2 } from 'lucide-react';
import { SCAM_CATEGORIES } from '../data/categories';
import {
  getQuestionsByCategory,
  getMixedQuizQuestions,
  getWeeklyChallengeQuestions,
} from '../data/questions';
import { QuizEngine } from '../components/quiz/QuizEngine';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useProgress } from '../hooks/useProgress';

export const QuizPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { progress } = useProgress();

  // If a categoryId is present in URL, render the active QuizEngine
  if (categoryId) {
    if (categoryId === 'mixed') {
      const mixedQuestions = getMixedQuizQuestions(10);
      return (
        <div className="space-y-6 pb-12">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <NavLink to="/quiz" className="text-xs text-slate-400 hover:text-white flex items-center gap-1">
              &larr; Back to Quiz Directory
            </NavLink>
            <span className="text-xs font-mono text-cyan-400 font-semibold">
              Mixed Assessment &bull; 10 Random Questions
            </span>
          </div>
          <QuizEngine
            categoryId="mixed"
            categoryName="Comprehensive Mixed Assessment"
            questions={mixedQuestions}
          />
        </div>
      );
    }

    if (categoryId === 'weekly') {
      const weeklyQuestions = getWeeklyChallengeQuestions();
      return (
        <div className="space-y-6 pb-12">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <NavLink to="/quiz" className="text-xs text-slate-400 hover:text-white flex items-center gap-1">
              &larr; Back to Quiz Directory
            </NavLink>
            <span className="text-xs font-mono text-cyan-400 font-semibold">
              Weekly Challenge &bull; Curated 5 Questions
            </span>
          </div>
          <QuizEngine
            categoryId="weekly"
            categoryName="Weekly Cyber Safety Challenge"
            questions={weeklyQuestions}
          />
        </div>
      );
    }

    const category = SCAM_CATEGORIES.find((c) => c.id === categoryId);
    const categoryQuestions = getQuestionsByCategory(categoryId);

    return (
      <div className="space-y-6 pb-12">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <NavLink to="/quiz" className="text-xs text-slate-400 hover:text-white flex items-center gap-1">
            &larr; Back to Quiz Directory
          </NavLink>
          {category && (
            <NavLink
              to={`/library/${category.id}`}
              className="text-xs text-cyan-400 hover:text-cyan-300 font-medium"
            >
              Study {category.name} Guide &rarr;
            </NavLink>
          )}
        </div>

        <QuizEngine
          categoryId={categoryId}
          categoryName={category?.name || 'Category Quiz'}
          questions={categoryQuestions}
        />
      </div>
    );
  }

  // ==========================================
  // QUIZ DIRECTORY VIEW: Lists all 12 category quizzes + special modes
  // ==========================================
  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-2">
          <HelpCircle size={13} className="text-cyan-400" />
          <span>Interactive Testing Engine</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Category-Specific Quizzes & Challenges
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
          Test your detection instincts across all twelve threat categories. Each quiz presents genuine, realistic scenarios with question-by-question scoring and full explanations.
        </p>
      </div>

      {/* Featured Challenges (Weekly & Mixed) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Weekly Challenge */}
        <Card className="p-6 border-indigo-500/40 bg-gradient-to-br from-indigo-950/30 via-slate-900 to-slate-950 flex flex-col justify-between">
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-indigo-900/60 rounded-lg text-cyan-300">
                <Sparkles size={16} />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                Weekly Challenge
              </span>
            </div>
            <h3 className="text-lg font-bold text-white">Campus & Digital Threat Sprint</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              5 high-frequency scenarios testing fake job offers, UPI QR scams, student hall ticket phishing, and digital arrest threats.
            </p>
          </div>
          <NavLink to="/quiz/weekly">
            <Button variant="primary" className="w-full" rightIcon={<ArrowRight size={15} />}>
              Start Weekly Sprint (5 Qs)
            </Button>
          </NavLink>
        </Card>

        {/* Mixed Category Marathon */}
        <Card className="p-6 border-cyan-500/40 bg-gradient-to-br from-cyan-950/20 via-slate-900 to-slate-950 flex flex-col justify-between">
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-cyan-900/60 rounded-lg text-cyan-300">
                <Shuffle size={16} />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                Mixed Assessment
              </span>
            </div>
            <h3 className="text-lg font-bold text-white">Full-Spectrum Random Quiz</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Draws 10 randomized questions from across all twelve threat categories for an authentic, unpredictable simulation.
            </p>
          </div>
          <NavLink to="/quiz/mixed">
            <Button variant="secondary" className="w-full" rightIcon={<ArrowRight size={15} />}>
              Start Mixed Quiz (10 Qs)
            </Button>
          </NavLink>
        </Card>
      </div>

      {/* Twelve Distinct Category Quizzes */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">Twelve Category Quizzes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SCAM_CATEGORIES.map((cat) => {
            const questions = getQuestionsByCategory(cat.id);
            const pastAttempt = progress.quizAttempts.find((a) => a.categoryId === cat.id);

            return (
              <Card
                key={cat.id}
                hoverEffect
                glow="cyan"
                className="p-5 flex flex-col justify-between border-slate-800"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                      {questions.length} Questions
                    </span>
                    {pastAttempt && (
                      <span className="text-xs font-mono font-bold text-cyan-400">
                        Best: {pastAttempt.percentage}%
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-slate-100 text-sm mb-1">{cat.name}</h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {cat.shortDescription}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-mono">{cat.difficulty}</span>
                  <NavLink to={`/quiz/${cat.id}`}>
                    <Button variant="outline" size="sm" rightIcon={<ArrowRight size={12} />}>
                      {pastAttempt ? 'Retake Quiz' : 'Start Quiz'}
                    </Button>
                  </NavLink>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
