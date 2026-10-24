import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShieldAlert, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export const NotFound: React.FC = () => {
  return (
    <div className="max-w-md mx-auto py-16 text-center space-y-4">
      <Card className="p-8 border-slate-800">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-cyan-400 mb-4">
          <ShieldAlert size={32} />
        </div>

        <h1 className="text-3xl font-extrabold text-white mb-1">404</h1>
        <h2 className="text-base font-bold text-slate-200 mb-2">Page Not Found</h2>
        <p className="text-xs text-slate-400 mb-6 leading-relaxed">
          The requested security destination does not exist or has been relocated.
        </p>

        <NavLink to="/">
          <Button variant="primary" leftIcon={<ArrowLeft size={16} />}>
            Return to Overview
          </Button>
        </NavLink>
      </Card>
    </div>
  );
};
