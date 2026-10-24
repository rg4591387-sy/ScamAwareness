import React from 'react';
import { AlertOctagon, AlertTriangle, CheckCircle2, HelpCircle } from 'lucide-react';
import { RiskLevel } from '../../types';

interface RiskBadgeProps {
  level: RiskLevel;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showIcon?: boolean;
}

export const RiskBadge: React.FC<RiskBadgeProps> = ({
  level,
  size = 'md',
  className = '',
  showIcon = true,
}) => {
  let badgeStyles = 'bg-slate-800/80 text-slate-300 border-slate-700';
  let Icon = HelpCircle;

  switch (level) {
    case 'High':
      badgeStyles = 'bg-rose-950/40 text-rose-300 border-rose-500/40 shadow-rose-950/20';
      Icon = AlertOctagon;
      break;
    case 'Medium':
      badgeStyles = 'bg-amber-950/40 text-amber-300 border-amber-500/40 shadow-amber-950/20';
      Icon = AlertTriangle;
      break;
    case 'Low':
      badgeStyles = 'bg-emerald-950/40 text-emerald-300 border-emerald-500/40 shadow-emerald-950/20';
      Icon = CheckCircle2;
      break;
    case 'Uncertain':
    default:
      badgeStyles = 'bg-indigo-950/40 text-indigo-300 border-indigo-500/30';
      Icon = HelpCircle;
      break;
  }

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 gap-1',
    md: 'text-sm px-2.5 py-1 gap-1.5',
    lg: 'text-base px-3.5 py-1.5 gap-2 font-semibold',
  };

  const iconSizes = {
    sm: 13,
    md: 15,
    lg: 18,
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full border backdrop-blur-sm transition-all shadow-sm ${sizeClasses[size]} ${badgeStyles} ${className}`}
      role="status"
      aria-label={`Risk Level: ${level}`}
    >
      {showIcon && <Icon size={iconSizes[size]} className="shrink-0" />}
      <span>{level} Risk</span>
    </span>
  );
};
