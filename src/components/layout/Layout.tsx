import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { MobileNav } from './MobileNav';
import { AnimatedBackground } from '../ui/AnimatedBackground';

export const Layout: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070A12] text-slate-100 flex relative overflow-x-hidden">
      {/* Background Animation System */}
      <AnimatedBackground />

      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Mobile Navigation Drawer */}
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 z-10 relative">
        <Header onOpenMobileNav={() => setMobileNavOpen(true)} />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto animate-fade-in">
          <Outlet />
        </main>

        {/* Global Footer */}
        <footer className="mt-auto border-t border-slate-800/80 bg-[#070A12]/80 backdrop-blur-sm px-4 sm:px-8 py-6 text-xs text-slate-400">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-300">ScamShield AI 2.0</span>
              <span>&bull;</span>
              <span>Digital Scam Awareness Platform</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <a
                href="https://cybercrime.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                cybercrime.gov.in
              </a>
              <span>&bull;</span>
              <span className="font-mono text-cyan-400 font-semibold">1930 Helpline</span>
              <span>&bull;</span>
              <span>Educational Use Only</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
