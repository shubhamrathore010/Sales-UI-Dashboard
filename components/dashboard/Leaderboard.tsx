
import React from 'react';
import { MOCK_AGENTS } from '../../constants/dashboard.constants';
import { MoreHorizontal, ChevronRight, Filter } from 'lucide-react';
import { Card } from '../ui/Card';
import { Avatar } from '../ui/Avatar';
import { StatusBadge } from '../ui/Badge';

export const Leaderboard: React.FC = () => (
  <Card className="flex flex-col h-full group">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      <div>
        <h3 className="text-xl font-black text-[#1A1A1A] tracking-tight">Team Leaderboard</h3>
        <p className="text-[13px] text-gray-400 font-semibold">Track real-time sales performance</p>
      </div>
      <div className="flex space-x-2">
        <button className="flex items-center space-x-2 px-4 py-2 bg-[#F7F5F3] rounded-[12px] text-gray-500 hover:text-[#1A1A1A] hover:bg-gray-200 transition-all">
          <Filter className="w-4 h-4" />
          <span className="text-xs font-bold">Filter</span>
        </button>
        <button className="p-2 bg-[#F7F5F3] rounded-[12px] text-gray-500 hover:text-[#1A1A1A] hover:bg-gray-200 transition-all">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>
    </div>

    <div className="overflow-x-auto -mx-2">
      <table className="w-full border-separate border-spacing-y-2">
        <thead>
          <tr>
            <th className="px-4 pb-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-[0.15em]">Agent Profile</th>
            <th className="px-4 pb-4 text-right text-[10px] font-black text-gray-400 uppercase tracking-[0.15em]">Net Revenue</th>
            <th className="px-4 pb-4 text-right text-[10px] font-black text-gray-400 uppercase tracking-[0.15em]">Leads</th>
            <th className="px-4 pb-4 text-right text-[10px] font-black text-gray-400 uppercase tracking-[0.15em]">Win Rate</th>
            <th className="px-4 pb-4 text-center text-[10px] font-black text-gray-400 uppercase tracking-[0.15em]">Status</th>
          </tr>
        </thead>
        <tbody>
          {MOCK_AGENTS.map((agent, idx) => (
            <tr 
              key={agent.id} 
              className="group/row transition-all hover:translate-x-1 cursor-pointer"
            >
              <td className="py-4 px-4 bg-[#F7F5F3]/30 rounded-l-[16px] group-hover/row:bg-[#FDF2F2]/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <Avatar src={agent.avatar} alt={agent.name} size="lg" rank={idx + 1} />
                  <div className="flex flex-col">
                    <span className="text-sm font-black text-[#1A1A1A] leading-none mb-1">{agent.name}</span>
                    <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wide">Executive</span>
                  </div>
                </div>
              </td>
              <td className="py-4 px-4 text-right bg-[#F7F5F3]/30 group-hover/row:bg-[#FDF2F2]/50 transition-colors">
                <div className="flex flex-col items-end">
                  <span className="text-sm font-black text-[#1A1A1A] tracking-tight">${agent.revenue.toLocaleString()}</span>
                  <span className="text-[10px] text-green-500 font-bold">+2.4%</span>
                </div>
              </td>
              <td className="py-4 px-4 text-right bg-[#F7F5F3]/30 group-hover/row:bg-[#FDF2F2]/50 transition-colors">
                <span className="text-sm font-bold text-gray-500">{agent.leads}</span>
              </td>
              <td className="py-4 px-4 text-right bg-[#F7F5F3]/30 group-hover/row:bg-[#FDF2F2]/50 transition-colors">
                <div className="flex flex-col items-end">
                  <span className="text-sm font-black text-[#1A1A1A]">{agent.winRate}%</span>
                  <div className="w-14 h-1.5 bg-gray-100 rounded-full overflow-hidden mt-1.5">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ${agent.winRate > 65 ? 'bg-green-400' : 'bg-[#E67E7E]'}`} 
                      style={{ width: `${agent.winRate}%` }} 
                    />
                  </div>
                </div>
              </td>
              <td className="py-4 px-4 text-center bg-[#F7F5F3]/30 rounded-r-[16px] group-hover/row:bg-[#FDF2F2]/50 transition-colors">
                <StatusBadge label={idx === 0 ? 'Elite' : 'Active'} type={idx === 0 ? 'success' : 'default'} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Card>
);
