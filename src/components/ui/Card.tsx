import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glow?: 'cyan' | 'violet' | 'amber' | 'rose' | 'none';
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  hoverEffect = false,
  glow = 'none',
  children,
  className = '',
  ...props
}) => {
  const glowStyles = {
    none: '',
    cyan: 'hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]',
    violet: 'hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]',
    amber: 'hover:border-amber-500/40 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]',
    rose: 'hover:border-rose-500/40 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]',
  };

  return (
    <div
      className={`bg-[#0F172A]/85 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 transition-all duration-200 text-slate-100 ${
        hoverEffect ? 'hover:-translate-y-1 hover:border-slate-700 cursor-pointer shadow-lg' : ''
      } ${glowStyles[glow]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
