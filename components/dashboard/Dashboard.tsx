
import React from 'react';
import { Sparkles } from 'lucide-react';
import { KPISection } from './KPISection';
import { SalesDynamicsChart, DealSourcesChart } from './MainCharts';
import { ContributionBars } from './ContributionBars';
import { Leaderboard } from './Leaderboard';

export const Dashboard: React.FC = () => {
  return (
    <div className="px-4 md:px-8 py-8 max-w-[1440px] mx-auto w-full">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight leading-tight">
            Performance Analytics
          </h1>
          <p className="text-sm md:text-base text-gray-500 mt-1 font-medium">
            Good morning, Alex. Here's what's happening with your sales today.
          </p>
        </div>
        <div className="flex items-center space-x-3 bg-white px-5 py-3 rounded-[18px] shadow-sm border border-gray-100 border-b-2 border-b-[#E67E7E] transform hover:scale-[1.02] transition-transform cursor-default">
          <Sparkles className="w-5 h-5 text-[#E67E7E]" />
          <span className="text-xs md:text-sm font-bold text-[#1A1A1A]">AI: Revenue is projected to grow 14% this quarter.</span>
        </div>
      </div>

      <KPISection />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
        <div className="xl:col-span-2">
          <SalesDynamicsChart />
        </div>
        <div className="xl:col-span-1">
          <DealSourcesChart />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 pb-12">
        <div className="xl:col-span-1">
          <ContributionBars />
        </div>
        <div className="xl:col-span-2">
          <Leaderboard />
        </div>
      </div>
    </div>
  );
};
