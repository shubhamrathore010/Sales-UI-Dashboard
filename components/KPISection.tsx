
import React from 'react';
import { TrendingUp, ArrowUpRight, DollarSign, Target, Briefcase, Award } from 'lucide-react';
import { MOCK_KPI } from '../constants';

const KPICard: React.FC<{
  label: string;
  value: string;
  growth: number;
  icon: any;
  highlight?: boolean;
}> = ({ label, value, growth, icon: Icon, highlight }) => (
  <div className={`p-6 rounded-[24px] group transition-all duration-500 border border-transparent ${highlight ? 'bg-white shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-1' : 'bg-white shadow-sm hover:shadow-lg hover:border-gray-100 hover:-translate-y-1'}`}>
    <div className="flex justify-between items-start mb-6">
      <div className={`p-3.5 rounded-[16px] transition-colors duration-300 ${highlight ? 'bg-[#FDF2F2] text-[#E67E7E]' : 'bg-gray-50 text-gray-400 group-hover:bg-[#FDF2F2] group-hover:text-[#E67E7E]'}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className={`flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-black tracking-wide ${growth >= 0 ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
        <TrendingUp className="w-3.5 h-3.5" />
        <span>{growth >= 0 ? '+' : ''}{growth}%</span>
      </div>
    </div>
    <div className="space-y-1">
      <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em]">{label}</p>
      <h3 className="text-3xl font-black text-[#1A1A1A] tracking-tight">{value}</h3>
    </div>
  </div>
);

const KPISection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      <KPICard 
        label="Total Revenue" 
        value={`$${MOCK_KPI.totalRevenue.toLocaleString()}`} 
        growth={MOCK_KPI.revenueGrowth} 
        icon={DollarSign}
        highlight={true}
      />
      <KPICard 
        label="Deals Count" 
        value={MOCK_KPI.dealsCount.toString()} 
        growth={MOCK_KPI.dealsGrowth} 
        icon={Briefcase}
      />
      <KPICard 
        label="Win Rate" 
        value={`${MOCK_KPI.winRate}%`} 
        growth={MOCK_KPI.winRateGrowth} 
        icon={Target}
      />
      <div className="p-6 bg-[#1A1A1A] rounded-[24px] shadow-2xl shadow-black/10 text-white flex flex-col justify-between group hover:-translate-y-1 transition-all duration-500">
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className="p-3.5 rounded-[16px] bg-[#E67E7E] text-white shadow-lg shadow-[#E67E7E]/20">
              <Award className="w-5 h-5" />
            </div>
            <div className="p-2 hover:bg-white/10 rounded-xl transition-colors cursor-pointer">
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </div>
          </div>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] mb-1">Top Performer</p>
          <h3 className="text-2xl font-black tracking-tight">{MOCK_KPI.topSalesPerson}</h3>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 font-bold uppercase">Best Deal</span>
            <span className="text-sm font-black text-[#E67E7E] tracking-tighter">${(MOCK_KPI.bestDeal / 1000).toFixed(0)}k</span>
          </div>
          <div className="flex -space-x-2">
            {[1,2,3].map(i => (
              <div key={i} className="w-6 h-6 rounded-full border-2 border-[#1A1A1A] bg-gray-700 flex items-center justify-center overflow-hidden">
                <img src={`https://picsum.photos/seed/team${i}/24/24`} alt="Team" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KPISection;
