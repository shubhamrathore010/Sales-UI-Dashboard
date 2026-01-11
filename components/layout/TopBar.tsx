
import React from 'react';
import { Search, Bell, Menu, ChevronDown, Filter } from 'lucide-react';
import { TIMEFRAME_OPTIONS } from '../../constants/dashboard.constants';
import { TimeFrame } from '../../types/dashboard.types';

interface TopBarProps {
  onMenuClick: () => void;
  selectedTimeFrame: TimeFrame;
  onTimeFrameChange: (tf: TimeFrame) => void;
}

export const TopBar: React.FC<TopBarProps> = ({ 
  onMenuClick, 
  selectedTimeFrame, 
  onTimeFrameChange 
}) => (
  <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-4 md:px-8 sticky top-0 z-30">
    <div className="flex items-center space-x-4 md:space-x-8">
      <button 
        onClick={onMenuClick}
        className="lg:hidden p-2 text-gray-400 hover:text-[#1A1A1A] transition-colors"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      <div className="hidden sm:flex items-center space-x-2.5 cursor-pointer group px-1 py-1 rounded-2xl hover:bg-gray-50 transition-colors">
        <div className="w-9 h-9 rounded-[10px] bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200 group-hover:border-[#E67E7E] transition-colors">
           <img src="https://picsum.photos/seed/company/64/64" alt="Company Logo" className="object-cover" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400 font-black uppercase tracking-[0.1em]">Workspace</span>
          <div className="flex items-center space-x-1">
            <span className="text-[13px] font-extrabold text-[#1A1A1A]">Design Studio Inc.</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#1A1A1A] transition-colors" />
          </div>
        </div>
      </div>

      <div className="relative group">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#E67E7E] transition-colors" />
        <input 
          type="text" 
          placeholder="Search dashboard..." 
          className="w-40 sm:w-64 md:w-80 bg-[#F7F5F3] border border-transparent rounded-[14px] py-2.5 pl-10 pr-4 text-[13px] font-medium focus:bg-white focus:border-[#E67E7E]/20 focus:ring-4 focus:ring-[#E67E7E]/5 transition-all outline-none text-[#1A1A1A] placeholder-gray-400"
        />
      </div>
    </div>

    <div className="flex items-center space-x-2 md:space-x-4">
      <div className="hidden md:flex items-center bg-[#F7F5F3] p-1 rounded-[14px] border border-gray-100 shadow-inner">
        {TIMEFRAME_OPTIONS.map((tf) => (
          <button 
            key={tf}
            onClick={() => onTimeFrameChange(tf)}
            className={`px-4 py-1.5 text-xs rounded-[10px] transition-all duration-200 ${
              selectedTimeFrame === tf 
                ? 'font-extrabold bg-white shadow-sm text-[#1A1A1A]' 
                : 'font-bold text-gray-400 hover:text-gray-600'
            }`}
          >
            {tf}
          </button>
        ))}
      </div>

      <div className="flex items-center space-x-1">
        <button className="p-2.5 text-gray-400 hover:text-[#1A1A1A] hover:bg-[#F7F5F3] rounded-[14px] transition-all" aria-label="Filters">
          <Filter className="w-5 h-5" />
        </button>

        <button className="p-2.5 text-gray-400 hover:text-[#1A1A1A] hover:bg-[#F7F5F3] rounded-[14px] transition-all relative" aria-label="Notifications">
          <Bell className="w-5 h-5" />
          <span className="absolute top-3 right-3 w-2 h-2 bg-[#E67E7E] ring-2 ring-white rounded-full"></span>
        </button>
      </div>

      <div className="h-8 w-px bg-gray-100 mx-1 hidden sm:block" />

      <div className="flex items-center space-x-3 cursor-pointer group">
        <img 
          src="https://picsum.photos/seed/admin/100/100" 
          alt="User Profile" 
          className="w-10 h-10 rounded-full border-2 border-transparent group-hover:border-[#E67E7E] shadow-sm transition-all"
        />
        <div className="hidden xl:flex flex-col">
          <span className="text-sm font-extrabold text-[#1A1A1A] leading-none">Alex Sterling</span>
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Head of Sales</span>
        </div>
      </div>
    </div>
  </header>
);
