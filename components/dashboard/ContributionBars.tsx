
import React from 'react';
import { MOCK_AGENTS, COLORS } from '../../constants/dashboard.constants';
import { Card } from '../ui/Card';

export const ContributionBars: React.FC = () => (
  <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
    <div className="flex justify-between items-center mb-10">
      <div>
        <h3 className="text-xl font-black text-[#1A1A1A] tracking-tight">Goal Progress</h3>
        <p className="text-[13px] text-gray-400 font-semibold mt-0.5">Individual quota completion</p>
      </div>
      <button className="text-xs font-black text-[#E67E7E] uppercase tracking-widest px-3 py-1.5 bg-[#FDF2F2] rounded-lg hover:bg-[#E67E7E] hover:text-white transition-colors">
        Explore
      </button>
    </div>

    <div className="space-y-7 flex-1 overflow-y-auto pr-2 custom-scrollbar">
      {MOCK_AGENTS.map((agent) => (
        <div key={agent.id} className="group cursor-default">
          <div className="flex justify-between items-end mb-2.5">
            <div className="flex items-center space-x-3.5">
              <div className="w-9 h-9 rounded-[12px] bg-gray-50 border border-gray-100 overflow-hidden shadow-sm group-hover:border-[#E67E7E] transition-colors">
                <img src={agent.avatar} alt={agent.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-black text-[#1A1A1A] leading-tight mb-0.5">{agent.name}</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wide">Sales Lead</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
               <span className="text-[15px] font-black text-[#E67E7E] tracking-tighter">{agent.contribution}%</span>
            </div>
          </div>
          <div className="w-full bg-[#F7F5F3] h-2.5 rounded-full overflow-hidden p-0.5 shadow-inner">
            <div 
              className="bg-[#E67E7E] h-full rounded-full transition-all duration-1000 group-hover:bg-[#1A1A1A] shadow-sm"
              style={{ width: `${agent.contribution}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </Card>
);
