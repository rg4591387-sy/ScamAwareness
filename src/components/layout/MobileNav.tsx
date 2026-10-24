import React from 'react';
import { NavLink } from 'react-router-dom';
import { X, Shield } from 'lucide-react';
import { NAVIGATION_ITEMS } from './navigationItems';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slideout Panel */}
      <div className="relative w-72 max-w-[85vw] h-full bg-[#0B0F19] border-r border-slate-800 flex flex-col z-10 animate-slide-right select-none">
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <NavLink to="/" onClick={onClose} className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center">
              <Shield size={16} className="text-white" />
            </div>
            <div>
              <span className="font-extrabold text-sm text-white">ScamShield AI 2.0</span>
            </div>
          </NavLink>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {NAVIGATION_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.path === '/'}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                    isActive
                      ? item.isEmergency
                        ? 'bg-rose-950/60 text-rose-300 border border-rose-500/40 font-semibold'
                        : 'bg-indigo-950/50 text-cyan-300 border border-indigo-500/40 font-semibold'
                      : item.isEmergency
                      ? 'text-rose-400 hover:bg-rose-950/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`
                }
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} className="shrink-0" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Footer info */}
        <div className="p-4 border-t border-slate-800 text-xs text-slate-400">
          <p className="font-medium text-slate-300">National Cyber Helpline: 1930</p>
          <p className="text-[11px] text-slate-500 mt-0.5">https://cybercrime.gov.in</p>
        </div>
      </div>
    </div>
  );
};
