import React, { useState } from 'react';
import {
  FlaskConical,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RotateCcw,
  ArrowRight,
  ShieldAlert,
  Smartphone,
  Mail,
  MessageSquare,
  HelpCircle,
  ChevronRight,
} from 'lucide-react';
import { SIMULATION_SCENARIOS } from '../data/simulations';
import { SimulationOption, SimulationScenario } from '../types';
import { useProgress } from '../hooks/useProgress';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const SimulationLab: React.FC = () => {
  const { progress, recordSimulationCompleted } = useProgress();

  const [activeScenarioId, setActiveScenarioId] = useState<string>(SIMULATION_SCENARIOS[0].id);
  const [selectedOption, setSelectedOption] = useState<SimulationOption | null>(null);
  const [hasDecided, setHasDecided] = useState<boolean>(false);

  const activeScenario =
    SIMULATION_SCENARIOS.find((s) => s.id === activeScenarioId) || SIMULATION_SCENARIOS[0];

  const handleSelectOption = (option: SimulationOption) => {
    if (hasDecided) return;
    setSelectedOption(option);
  };

  const handleConfirmDecision = async () => {
    if (!selectedOption) return;
    setHasDecided(true);
    await recordSimulationCompleted(activeScenario.id);
  };

  const handleResetScenario = () => {
    setSelectedOption(null);
    setHasDecided(false);
  };

  const handleNextScenario = () => {
    const currentIndex = SIMULATION_SCENARIOS.findIndex((s) => s.id === activeScenario.id);
    const nextIndex = (currentIndex + 1) % SIMULATION_SCENARIOS.length;
    setActiveScenarioId(SIMULATION_SCENARIOS[nextIndex].id);
    handleResetScenario();
  };

  const channelIcons = {
    Email: Mail,
    SMS: Smartphone,
    WhatsApp: MessageSquare,
    Call: Smartphone,
    Telegram: MessageSquare,
    'Campus Portal': Mail,
  };
  const ChannelIcon = channelIcons[activeScenario.channel] || MessageSquare;

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-2">
          <FlaskConical size={13} className="text-cyan-400" />
          <span>Safe Threat Sandbox</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Interactive Scam Simulation Lab
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
          Practice evaluating dangerous scenarios in a safe, risk-free educational environment. Make your choice and analyze the consequences. All scenarios are entirely simulated.
        </p>
      </div>

      {/* Scenario Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {SIMULATION_SCENARIOS.map((scenario, idx) => {
          const isDone = progress.completedSimulations.includes(scenario.id);
          const isSelected = scenario.id === activeScenario.id;
          return (
            <button
              key={scenario.id}
              onClick={() => {
                setActiveScenarioId(scenario.id);
                handleResetScenario();
              }}
              className={`px-3 py-2 rounded-xl text-xs font-medium shrink-0 transition flex items-center gap-2 border ${
                isSelected
                  ? 'bg-indigo-950 text-cyan-300 border-cyan-400 shadow-sm'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <span className="font-mono text-[10px] text-slate-500">#{idx + 1}</span>
              <span className="truncate max-w-[130px] sm:max-w-[180px]">{scenario.title}</span>
              {isDone && <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <Card className="p-6 border-slate-700/80 space-y-5">
        {/* Scenario Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                {activeScenario.category}
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 font-mono">
                {activeScenario.difficulty}
              </span>
            </div>
            <h2 className="text-lg font-bold text-white">{activeScenario.title}</h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
            <ChannelIcon size={14} />
            <span>Channel: {activeScenario.channel}</span>
          </div>
        </div>

        {/* Realistic Simulated Message Mockup */}
        <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden shadow-inner">
          {/* Sender Subheader */}
          <div className="p-3 bg-slate-900/90 border-b border-slate-800/80 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-xs">
                {activeScenario.senderInfo.name.charAt(0)}
              </div>
              <div>
                <span className="font-bold text-slate-200 block">
                  {activeScenario.senderInfo.name}
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  {activeScenario.senderInfo.handleOrEmail}
                </span>
              </div>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-rose-950/60 text-rose-300 border border-rose-500/30 font-bold uppercase tracking-wider">
              Simulated Threat
            </span>
          </div>

          {/* Message Content */}
          <div className="p-5 font-sans text-xs sm:text-sm text-slate-200 whitespace-pre-wrap leading-relaxed">
            {activeScenario.content}
          </div>

          {activeScenario.metaNotes && (
            <div className="px-5 py-2.5 bg-slate-900/40 border-t border-slate-800/60 text-[11px] text-slate-400 italic">
              Context Note: {activeScenario.metaNotes}
            </div>
          )}
        </div>

        {/* Decision Options */}
        <div className="space-y-3 pt-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
            What is your response decision?
          </label>

          <div className="space-y-2.5">
            {activeScenario.options.map((option) => {
              const isSelected = selectedOption?.id === option.id;
              let optionStyles = 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700';

              if (hasDecided) {
                if (option.isSafe) {
                  optionStyles = 'bg-emerald-950/40 border-emerald-500/60 text-emerald-200 font-semibold';
                } else if (isSelected && !option.isSafe) {
                  optionStyles = 'bg-rose-950/40 border-rose-500/60 text-rose-200';
                } else {
                  optionStyles = 'bg-slate-950/40 border-slate-900 text-slate-500 opacity-60';
                }
              } else if (isSelected) {
                optionStyles = 'bg-indigo-950/80 border-cyan-400 text-white shadow-md shadow-cyan-950/20';
              }

              return (
                <div
                  key={option.id}
                  onClick={() => handleSelectOption(option)}
                  className={`p-4 rounded-xl border text-xs sm:text-sm transition flex items-start gap-3 cursor-pointer ${optionStyles}`}
                >
                  <div className="shrink-0 mt-0.5">
                    {hasDecided ? (
                      option.isSafe ? (
                        <CheckCircle2 size={16} className="text-emerald-400" />
                      ) : isSelected ? (
                        <XCircle size={16} className="text-rose-400" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-slate-700" />
                      )
                    ) : (
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center transition ${
                          isSelected ? 'border-cyan-400 bg-cyan-400' : 'border-slate-600'
                        }`}
                      >
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                      </div>
                    )}
                  </div>
                  <span className="leading-relaxed flex-1">{option.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Button: Confirm or Next */}
        {!hasDecided ? (
          <div className="flex justify-end pt-3">
            <Button
              variant="primary"
              size="md"
              onClick={handleConfirmDecision}
              disabled={!selectedOption}
              rightIcon={<ArrowRight size={15} />}
            >
              Confirm My Decision
            </Button>
          </div>
        ) : (
          <div className="space-y-4 pt-4 border-t border-slate-800 animate-fade-in">
            {/* Feedback Breakdown */}
            <div
              className={`p-5 rounded-xl border ${
                selectedOption?.isSafe
                  ? 'bg-emerald-950/20 border-emerald-500/40'
                  : 'bg-rose-950/20 border-rose-500/40'
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                {selectedOption?.isSafe ? (
                  <CheckCircle2 size={20} className="text-emerald-400" />
                ) : (
                  <AlertTriangle size={20} className="text-rose-400" />
                )}
                <h4 className="font-bold text-sm sm:text-base text-white">
                  {selectedOption?.isSafe ? 'Safe Choice! Red Flags Detected' : 'Dangerous Decision!'}
                </h4>
              </div>

              <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-slate-300">
                <p>
                  <strong className="text-slate-100">Why this happened:</strong>{' '}
                  {selectedOption?.explanation}
                </p>

                {selectedOption?.keyWarningSigns && selectedOption.keyWarningSigns.length > 0 && (
                  <div>
                    <strong className="text-slate-100 block mb-1">Key Red Flags in Scenario:</strong>
                    <ul className="list-disc list-inside space-y-1 text-slate-300">
                      {selectedOption.keyWarningSigns.map((sign, idx) => (
                        <li key={idx}>{sign}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="p-3 bg-slate-950/70 rounded-lg border border-slate-800 text-xs">
                  <strong className="text-cyan-400 block mb-1">What a Safer Response Looks Like:</strong>
                  {selectedOption?.optimalSafeResponse}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 pt-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={handleResetScenario}
                leftIcon={<RotateCcw size={14} />}
              >
                Retry Scenario
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={handleNextScenario}
                rightIcon={<ArrowRight size={15} />}
              >
                Next Simulation Scenario
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};
