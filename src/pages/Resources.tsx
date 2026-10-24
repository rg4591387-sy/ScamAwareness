import React, { useState } from 'react';
import { Bookmark, ExternalLink, Shield, CheckCircle2, Search, Filter } from 'lucide-react';
import { CYBER_RESOURCES } from '../data/resourcesData';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const Resources: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...new Set(CYBER_RESOURCES.map((r) => r.category))];

  const filteredResources = CYBER_RESOURCES.filter((res) => {
    const matchesCat = selectedCategory === 'All' || res.category === selectedCategory;
    const matchesSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.organization.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-2">
          <Bookmark size={13} className="text-cyan-400" />
          <span>Verified Portals & Standards</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Cyber Safety Resource Center
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
          Directory of verified external resources, regulatory portals, and official helplines in India. All external links open securely in new tabs.
        </p>
      </div>

      {/* Notice distinguishing official sources */}
      <div className="p-3.5 bg-indigo-950/30 border border-indigo-500/30 rounded-xl text-xs text-indigo-200 flex items-start gap-2.5">
        <Shield size={16} className="text-cyan-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-slate-100">Verification Integrity:</strong> Portals listed here are operated directly by sovereign government ministries (MHA, MeitY, DoT, MCA) or established industry standard bodies (RBI, FIDO Alliance). ScamShield AI does not claim official sponsorship.
        </p>
      </div>

      {/* Search and Category Filters */}
      <Card className="p-4 space-y-3 border-slate-800">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search resources, government agencies, portals..."
              className="w-full bg-slate-950/80 border border-slate-700/80 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition border ${
                  selectedCategory === cat
                    ? 'bg-indigo-950 text-cyan-300 border-cyan-400 font-semibold'
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* Resources Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredResources.map((res) => (
          <Card key={res.id} hoverEffect glow="cyan" className="p-5 flex flex-col justify-between border-slate-800">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                  {res.sourceType}
                </span>
                {res.isExternalVerified && (
                  <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-semibold">
                    <CheckCircle2 size={12} /> Verified Source
                  </span>
                )}
              </div>

              <h3 className="font-bold text-base text-white">{res.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                {res.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-500 truncate max-w-[180px] text-[11px]">
                {res.organization}
              </span>
              <a
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1"
              >
                Visit Portal <ExternalLink size={12} />
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
