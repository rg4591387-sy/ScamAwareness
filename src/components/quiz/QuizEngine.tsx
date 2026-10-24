import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  BookOpen,
  Award,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import { QuizAttempt, QuizAttemptAnswer, QuizQuestion } from '../../types';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { useProgress } from '../../hooks/useProgress';

interface QuizEngineProps {
  categoryId: string;
  categoryName: string;
  questions: QuizQuestion[];
  onComplete?: (attempt: QuizAttempt) => void;
}

export const QuizEngine: React.FC<QuizEngineProps> = ({
  categoryId,
  categoryName,
  questions,
  onComplete,
}) => {
  const { saveQuizAttempt } = useProgress();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [isReviewing, setIsReviewing] = useState(false);
  const [completedAttempt, setCompletedAttempt] = useState<QuizAttempt | null>(null);

  if (!questions || questions.length === 0) {
    return (
      <Card className="text-center py-12">
        <HelpCircle size={40} className="mx-auto text-slate-500 mb-3" />
        <h3 className="text-lg font-bold text-slate-200">No Questions Available</h3>
        <p className="text-sm text-slate-400 mt-1 mb-6">
          No questions were found for category: {categoryName}
        </p>
        <NavLink to="/quiz">
          <Button variant="secondary">Back to Quizzes</Button>
        </NavLink>
      </Card>
    );
  }

  const currentQ = questions[currentIndex];
  const totalQuestions = questions.length;
  const hasSelectedCurrent = selectedAnswers[currentIndex] !== undefined;

  const handleSelectOption = (optionIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionIndex,
    }));
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleSubmitQuiz = async () => {
    // Validate that all questions have been answered
    for (let i = 0; i < totalQuestions; i++) {
      if (selectedAnswers[i] === undefined) {
        setCurrentIndex(i);
        return;
      }
    }

    // Compute score
    let correctCount = 0;
    const answers: QuizAttemptAnswer[] = questions.map((q, idx) => {
      const selected = selectedAnswers[idx];
      const isCorrect = selected === q.correctAnswer;
      if (isCorrect) correctCount++;
      return {
        questionId: q.questionId,
        questionText: q.questionText,
        selectedOption: selected,
        correctAnswer: q.correctAnswer,
        isCorrect,
        options: q.answerOptions,
        explanation: q.explanation,
        optionExplanation: q.optionExplanations?.[selected] || q.explanation,
      };
    });

    const percentage = Math.round((correctCount / totalQuestions) * 100);

    const attempt: QuizAttempt = {
      id: `attempt-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      categoryId,
      categoryName,
      score: correctCount,
      total: totalQuestions,
      percentage,
      answers,
      completedAt: new Date().toISOString(),
    };

    setCompletedAttempt(attempt);
    setIsCompleted(true);

    await saveQuizAttempt(attempt);
    if (onComplete) onComplete(attempt);
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentIndex(0);
    setIsCompleted(false);
    setIsReviewing(false);
    setCompletedAttempt(null);
  };

  // ==========================================
  // VIEW 1: RESULTS SUMMARY
  // ==========================================
  if (isCompleted && completedAttempt && !isReviewing) {
    const isPassing = completedAttempt.percentage >= 70;

    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Card className="text-center py-8 px-6 border-slate-700/80">
          <div
            className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-4 border ${
              isPassing
                ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-400 shadow-lg shadow-emerald-950/30'
                : 'bg-amber-950/40 border-amber-500/40 text-amber-400 shadow-lg shadow-amber-950/30'
            }`}
          >
            {isPassing ? <Award size={40} /> : <AlertCircle size={40} />}
          </div>

          <h2 className="text-2xl font-bold text-white mb-1">
            {isPassing ? 'Outstanding Awareness!' : 'Learning Opportunity!'}
          </h2>
          <p className="text-sm text-slate-400 mb-6">
            Category Quiz: <span className="text-slate-200 font-semibold">{categoryName}</span>
          </p>

          {/* Score Metric Circle */}
          <div className="inline-flex flex-col items-center justify-center p-6 bg-slate-900/80 rounded-2xl border border-slate-800 mb-6 min-w-[200px]">
            <span className="text-4xl font-extrabold font-mono text-cyan-400">
              {completedAttempt.percentage}%
            </span>
            <span className="text-xs text-slate-400 mt-1">
              {completedAttempt.score} of {completedAttempt.total} correct
            </span>
          </div>

          <p className="text-sm text-slate-300 max-w-md mx-auto mb-8 leading-relaxed">
            {isPassing
              ? 'You demonstrated strong detection instincts for this scam vector. Keep practicing to maintain your defense proficiency!'
              : 'Several key manipulation markers were missed. Review the explanations below to strengthen your threat identification skills.'}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="primary"
              onClick={() => setIsReviewing(true)}
              leftIcon={<BookOpen size={16} />}
            >
              Review Mistakes & Answers
            </Button>
            <Button
              variant="secondary"
              onClick={handleRestart}
              leftIcon={<RotateCcw size={16} />}
            >
              Retake Quiz
            </Button>
            {categoryId !== 'mixed' && categoryId !== 'weekly' && (
              <NavLink to={`/library/${categoryId}`}>
                <Button variant="outline">Back to Category Study</Button>
              </NavLink>
            )}
          </div>
        </Card>
      </div>
    );
  }

  // ==========================================
  // VIEW 2: REVIEW MISTAKES & EXPLANATIONS
  // ==========================================
  if (isCompleted && completedAttempt && isReviewing) {
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <h2 className="text-xl font-bold text-white">Answer Review & Explanations</h2>
            <p className="text-xs text-slate-400">
              {categoryName} &bull; Final Score: {completedAttempt.score}/{completedAttempt.total} ({completedAttempt.percentage}%)
            </p>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setIsReviewing(false)}
            leftIcon={<ArrowLeft size={14} />}
          >
            Back to Results
          </Button>
        </div>

        <div className="space-y-6">
          {completedAttempt.answers.map((ans, idx) => (
            <Card
              key={ans.questionId}
              className={`border-l-4 ${
                ans.isCorrect ? 'border-l-emerald-500 bg-slate-900/60' : 'border-l-rose-500 bg-slate-900/60'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="text-xs font-mono font-bold text-slate-400">
                  Question {idx + 1} of {completedAttempt.total}
                </span>
                <span
                  className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${
                    ans.isCorrect
                      ? 'bg-emerald-950/50 text-emerald-300 border border-emerald-500/30'
                      : 'bg-rose-950/50 text-rose-300 border border-rose-500/30'
                  }`}
                >
                  {ans.isCorrect ? (
                    <>
                      <CheckCircle2 size={12} /> Correct
                    </>
                  ) : (
                    <>
                      <XCircle size={12} /> Incorrect
                    </>
                  )}
                </span>
              </div>

              <h4 className="font-semibold text-slate-100 text-sm mb-4 leading-relaxed">
                {ans.questionText}
              </h4>

              <div className="space-y-2 mb-4">
                {ans.options.map((optText, optIdx) => {
                  const isSelected = ans.selectedOption === optIdx;
                  const isAnswer = ans.correctAnswer === optIdx;

                  let optClass = 'bg-slate-950/40 border-slate-800 text-slate-300';
                  if (isAnswer) {
                    optClass = 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200 font-medium';
                  } else if (isSelected && !ans.isCorrect) {
                    optClass = 'bg-rose-950/40 border-rose-500/50 text-rose-200';
                  }

                  return (
                    <div
                      key={optIdx}
                      className={`p-3 rounded-lg border text-xs flex items-start gap-2.5 ${optClass}`}
                    >
                      <span className="font-mono font-bold text-slate-400 shrink-0">
                        {String.fromCharCode(65 + optIdx)}.
                      </span>
                      <span className="flex-1">{optText}</span>
                      {isAnswer && <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />}
                      {isSelected && !ans.isCorrect && (
                        <XCircle size={14} className="text-rose-400 shrink-0 mt-0.5" />
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="p-3 bg-slate-950/70 rounded-lg border border-slate-800/90 text-xs text-slate-300 leading-relaxed">
                <span className="font-bold text-cyan-400 block mb-1">Defense Insight:</span>
                {ans.explanation}
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <Button variant="primary" onClick={handleRestart} leftIcon={<RotateCcw size={16} />}>
            Retake Quiz
          </Button>
        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW 3: ACTIVE QUESTION SCREEN
  // ==========================================
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Category Preservation & Progress Header */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="font-semibold text-cyan-400 uppercase tracking-wider">
            {categoryName}
          </span>
          <span className="font-mono">
            Question <span className="text-slate-100 font-bold">{currentIndex + 1}</span> of{' '}
            {totalQuestions}
          </span>
        </div>

        {/* Real Progress Bar */}
        <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-cyan-400 to-indigo-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Question Card */}
      <Card className="p-6">
        {currentQ.scenario && (
          <div className="mb-4 p-3 bg-indigo-950/20 border border-indigo-500/20 rounded-lg text-xs text-indigo-300 font-mono">
            <span className="font-bold uppercase tracking-wider text-indigo-400 block mb-0.5">
              Scenario Context:
            </span>
            {currentQ.scenario}
          </div>
        )}

        <h3 className="text-base sm:text-lg font-bold text-white mb-6 leading-relaxed">
          {currentQ.questionText}
        </h3>

        {/* Options List */}
        <div className="space-y-3" role="radiogroup" aria-label="Answer options">
          {currentQ.answerOptions.map((option, idx) => {
            const isSelected = selectedAnswers[currentIndex] === idx;
            return (
              <div
                key={idx}
                onClick={() => handleSelectOption(idx)}
                className={`p-4 rounded-xl border text-sm transition-all duration-150 cursor-pointer flex items-start gap-3 select-none ${
                  isSelected
                    ? 'bg-indigo-950/60 border-cyan-400 text-white shadow-md shadow-cyan-950/20 ring-1 ring-cyan-400/50'
                    : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/60'
                }`}
                role="radio"
                aria-checked={isSelected}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault();
                    handleSelectOption(idx);
                  }
                }}
              >
                <div
                  className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs font-bold transition ${
                    isSelected
                      ? 'border-cyan-400 bg-cyan-400 text-slate-950'
                      : 'border-slate-700 text-slate-400'
                  }`}
                >
                  {String.fromCharCode(65 + idx)}
                </div>
                <span className="leading-relaxed flex-1">{option}</span>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Controls: Previous, Next, Submit */}
      <div className="flex items-center justify-between gap-3 pt-2">
        <Button
          variant="secondary"
          size="md"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          leftIcon={<ArrowLeft size={16} />}
        >
          Previous
        </Button>

        {currentIndex < totalQuestions - 1 ? (
          <Button
            variant="primary"
            size="md"
            onClick={handleNext}
            disabled={!hasSelectedCurrent}
            rightIcon={<ArrowRight size={16} />}
          >
            Next Question
          </Button>
        ) : (
          <Button
            variant="primary"
            size="md"
            onClick={handleSubmitQuiz}
            disabled={!hasSelectedCurrent}
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-bold"
          >
            Submit Quiz
          </Button>
        )}
      </div>
    </div>
  );
};
