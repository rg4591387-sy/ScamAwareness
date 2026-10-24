import React from 'react';
import { useLocation } from 'react-router-dom';
import { usePreferences } from '../../hooks/usePreferences';

export type BackgroundVariant =
  | 'overview'
  | 'analyzer'
  | 'library'
  | 'quiz'
  | 'student'
  | 'simulation'
  | 'emergency'
  | 'default';

export const AnimatedBackground: React.FC<{ variant?: BackgroundVariant }> = ({ variant }) => {
  const location = useLocation();
  const { preferences } = usePreferences();

  // Determine variant from route if not explicitly passed
  let activeVariant = variant;
  if (!activeVariant) {
    const path = location.pathname;
    if (path === '/') activeVariant = 'overview';
    else if (path.startsWith('/analyzer')) activeVariant = 'analyzer';
    else if (path.startsWith('/library')) activeVariant = 'library';
    else if (path.startsWith('/quiz')) activeVariant = 'quiz';
    else if (path.startsWith('/student-safety')) activeVariant = 'student';
    else if (path.startsWith('/simulation')) activeVariant = 'simulation';
    else if (path.startsWith('/emergency')) activeVariant = 'emergency';
    else activeVariant = 'default';
  }

  // If user prefers reduced motion, render a static, restrained background
  if (preferences.reducedMotion) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#070A12]">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#070A12] select-none">
      {/* Ambient Radial Gradients */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-indigo-600/10 blur-[140px]" />
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 rounded-full bg-purple-600/10 blur-[130px]" />

      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:32px_32px] opacity-35" />

      {/* Page-Specific Ambient Visuals */}
      {activeVariant === 'overview' && (
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#6366F1" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <circle cx="20%" cy="30%" r="280" stroke="url(#grid-grad)" strokeWidth="1" fill="none" strokeDasharray="6 8" />
          <circle cx="80%" cy="65%" r="220" stroke="url(#grid-grad)" strokeWidth="1" fill="none" strokeDasharray="4 6" />
          <path d="M 0,200 Q 300,350 600,180 T 1200,280" stroke="#06B6D4" strokeWidth="0.75" fill="none" opacity="0.3" />
        </svg>
      )}

      {activeVariant === 'analyzer' && (
        <div className="absolute inset-0 opacity-15">
          {/* Subtle Scanning Line Animation */}
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan" />
          <div className="absolute right-10 top-20 w-48 h-48 border border-cyan-500/20 rounded-full flex items-center justify-center">
            <div className="w-32 h-32 border border-cyan-500/30 rounded-full animate-ping opacity-25" />
          </div>
        </div>
      )}

      {activeVariant === 'quiz' && (
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6366F1_1px,transparent_1px)] [background-size:40px_40px]" />
      )}

      {activeVariant === 'emergency' && (
        <div className="absolute inset-0 bg-gradient-to-b from-rose-950/15 via-transparent to-black/80" />
      )}

      {activeVariant === 'student' && (
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15%" cy="85%" r="180" stroke="#06B6D4" strokeWidth="1" fill="none" opacity="0.2" />
            <path d="M 100,50 L 150,120 L 50,120 Z" stroke="#6366F1" strokeWidth="0.75" fill="none" opacity="0.2" />
          </svg>
        </div>
      )}
    </div>
  );
};
