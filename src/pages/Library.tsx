import React, { useState, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { Search, BookOpen, Filter, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { SCAM_CATEGORIES } from '../data/categories';
import { useProgress } from '../hooks/useProgress';
import { Card } from '../components/ui/Card';
import { RiskBadge } from '../components/ui/RiskBadge';
import { Button } from '../components/ui/Button';

export const Library: React.FC = () => {
  const { progress } = useProgress();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRisk, setSelectedRisk] = useState<'All' | 'High' | 'Medium' | 'Low'>('All');

  const filteredCategories = useMemo(() => {
    return SCAM_CATEGORIES.filter((cat) => {
      const matchesSearch =
        cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.badge.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesRisk = selectedRisk === 'All' || cat.riskLevel === selectedRisk;

      return matchesSearch && matchesRisk;
    });
  }, [searchQuery, selectedRisk]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedRisk('All');
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-2">
          <BookOpen size={13} className="text-cyan-400" />
          <span>Curated Intelligence Archive</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Scam & Threat Library
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
          Explore twelve distinct digital scam categories. Each guide includes technical mechanics, psychological triggers, realistic case studies, and a dedicated mastery quiz.
        </p>
      </div>

      {/* Search and Filters Bar */}
      <Card className="p-4 space-y-3 border-slate-800">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by scam name, keyword (e.g. UPI, KYC, Telegram, Arrest)..."
              className="w-full bg-slate-950/80 border border-slate-700/80 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Risk Level Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {(['All', 'High', 'Medium', 'Low'] as const).map((risk) => (
              <button
                key={risk}
                onClick={() => setSelectedRisk(risk)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition border ${
                  selectedRisk === risk
                    ? 'bg-indigo-950 text-cyan-300 border-cyan-500/50 font-semibold'
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                {risk === 'All' ? 'All Risks' : `${risk} Risk`}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter and Active Filters */}
        <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
          <span>
            Showing <strong className="text-slate-200">{filteredCategories.length}</strong> of{' '}
            {SCAM_CATEGORIES.length} scam categories
          </span>
          {(searchQuery || selectedRisk !== 'All') && (
            <button
              onClick={handleClearFilters}
              className="text-cyan-400 hover:text-cyan-300 font-medium"
            >
              Clear filters
            </button>
          )}
        </div>
      </Card>

      {/* Categories Grid */}
      {filteredCategories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCategories.map((cat) => {
            const isCompleted = progress.completedCategories.includes(cat.id);
            return (
              <Card
                key={cat.id}
                hoverEffect
                glow="cyan"
                className="flex flex-col justify-between p-5 border-slate-800"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                      {cat.badge}
                    </span>
                    <RiskBadge level={cat.riskLevel} size="sm" />
                  </div>

                  <h3 className="font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                    {cat.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {cat.shortDescription}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs">
                    {isCompleted ? (
                      <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                        <ShieldCheck size={14} /> Learned
                      </span>
                    ) : (
                      <span className="text-slate-500 font-mono text-[11px]">
                        {cat.difficulty}
                      </span>
                    )}
                  </div>

                  <NavLink to={`/library/${cat.id}`}>
                    <Button variant="outline" size="sm" rightIcon={<ArrowRight size={13} />}>
                      Read Guide
                    </Button>
                  </NavLink>
                </div>
              </Card>
            );
          })}
        </div>
      ) : (
        <Card className="text-center py-12 px-4 border-slate-800">
          <Filter size={36} className="mx-auto text-slate-500 mb-3" />
          <h3 className="text-base font-bold text-slate-200">No matching scam categories</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1 mb-4">
            No categories matched &ldquo;{searchQuery}&rdquo; under the {selectedRisk} risk filter.
          </p>
          <Button variant="secondary" size="sm" onClick={handleClearFilters}>
            Reset Filters
          </Button>
        </Card>
      )}
    </div>
  );
};
