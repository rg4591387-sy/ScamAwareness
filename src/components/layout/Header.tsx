import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, AlertOctagon, Sparkles, Shield, Cpu } from 'lucide-react';
import { useProgress } from '../../hooks/useProgress';
import { usePreferences } from '../../hooks/usePreferences';

interface HeaderProps {
  onOpenMobileNav: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMobileNav }) => {
  const { scoreBreakdown } = useProgress();
  const { serverHealth, preferences } = usePreferences();

  const isLiveAI = !preferences.forceDemoMode && Boolean(serverHealth?.geminiConfigured);

  return (
    <header className="sticky top-0 z-20 h-16 bg-[#070A12]/85 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-6 flex items-center justify-between">
      {/* Left: Mobile Nav Toggle & Brand Mobile */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileNav}
          className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          aria-label="Open navigation menu"
        >
          <Menu size={22} />
        </button>

        <NavLink to="/" className="lg:hidden flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center">
            <Shield size={16} className="text-white" />
          </div>
          <span className="font-extrabold text-base tracking-tight text-white">ScamShield</span>
        </NavLink>

        <div className="hidden lg:flex items-center gap-2 text-xs text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-medium text-slate-300">Defense System Active</span>
        </div>
      </div>

      {/* Right Controls: AI Mode, Cyber Score, Emergency Shortcut */}
      <div className="flex items-center gap-2.5 sm:gap-4">
        {/* Live AI vs Demo Mode Status Indicator */}
        <NavLink
          to="/settings"
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border transition ${
            isLiveAI
              ? 'bg-cyan-950/40 text-cyan-300 border-cyan-500/40 hover:bg-cyan-950/60'
              : 'bg-amber-950/40 text-amber-300 border-amber-500/40 hover:bg-amber-950/60'
          }`}
          title={isLiveAI ? 'Live Google Gemini AI Connected' : 'Operating in Demo / Educational Mode'}
        >
          {isLiveAI ? (
            <>
              <Sparkles size={13} className="text-cyan-400" />
              <span className="hidden sm:inline">Live Gemini AI</span>
              <span className="sm:hidden">Live AI</span>
            </>
          ) : (
            <>
              <Cpu size={13} className="text-amber-400" />
              <span className="hidden sm:inline">Demo Mode</span>
              <span className="sm:hidden">Demo</span>
            </>
          )}
        </NavLink>

        {/* Cyber Safety Score Pill */}
        <NavLink
          to="/progress"
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs text-slate-200 hover:border-slate-500 transition"
        >
          <span className="text-slate-400 hidden md:inline">Score:</span>
          <span className="font-bold text-cyan-400 font-mono">
            {scoreBreakdown.totalScore}
          </span>
          <span className="text-slate-500 text-[10px]">/100</span>
        </NavLink>

        {/* Emergency Help Fast Action Button */}
        <NavLink
          to="/emergency"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-600/90 hover:bg-rose-500 text-white text-xs font-bold shadow-md shadow-rose-950/40 transition active:scale-95"
          aria-label="Emergency Cyber Helpline 1930"
        >
          <AlertOctagon size={14} className="shrink-0" />
          <span>1930 Help</span>
        </NavLink>
      </div>
    </header>
  );
};
