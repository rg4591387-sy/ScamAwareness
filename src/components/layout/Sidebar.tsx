import React from 'react';
import { NavLink } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { NAVIGATION_ITEMS } from './navigationItems';
import { useProgress } from '../../hooks/useProgress';

export const Sidebar: React.FC = () => {
  const { scoreBreakdown } = useProgress();

  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen sticky top-0 bg-[#0B0F19]/90 border-r border-slate-800/80 backdrop-blur-xl z-30 select-none">
      {/* Brand Logo & Return to Overview */}
      <div className="p-5 border-b border-slate-800/80">
        <NavLink
          to="/"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-1"
          aria-label="ScamShield AI Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-950/40 border border-cyan-400/30 group-hover:scale-105 transition-transform duration-200">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                ScamShield
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                2.0
              </span>
            </div>
            <p className="text-[11px] font-medium text-slate-400">Cyber Defense Platform</p>
          </div>
        </NavLink>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1 custom-scrollbar">
        {NAVIGATION_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 group ${
                  isActive
                    ? item.isEmergency
                      ? 'bg-rose-950/60 text-rose-300 border border-rose-500/40 shadow-sm shadow-rose-950/30 font-semibold'
                      : 'bg-indigo-950/50 text-cyan-300 border border-indigo-500/40 shadow-sm shadow-cyan-950/20 font-semibold'
                    : item.isEmergency
                    ? 'text-rose-400 hover:bg-rose-950/30 hover:text-rose-300 border border-transparent'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent'
                }`
              }
            >
              <div className="flex items-center gap-3 min-w-0">
                <Icon
                  size={18}
                  className="shrink-0 transition-transform duration-150 group-hover:scale-110"
                />
                <span className="truncate">{item.label}</span>
              </div>
              {item.badge && (
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 shrink-0">
                  {item.badge}
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom Cyber Safety Score Widget */}
      <div className="p-4 border-t border-slate-800/80 bg-slate-900/40">
        <NavLink
          to="/progress"
          className="block p-3 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 transition group"
        >
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
            <span className="font-medium text-slate-300">Cyber Safety Score</span>
            <span className="font-bold text-cyan-400 font-mono">
              {scoreBreakdown.totalScore}/100
            </span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-cyan-400 to-indigo-500 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${Math.max(5, scoreBreakdown.totalScore)}%` }}
            />
          </div>
          <span className="block text-[10px] text-slate-400 group-hover:text-cyan-300 mt-2 transition-colors">
            View breakdown & details &rarr;
          </span>
        </NavLink>
      </div>
    </aside>
  );
};
