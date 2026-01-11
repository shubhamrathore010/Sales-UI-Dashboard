
import React from 'react';
import { 
  LayoutDashboard, 
  Target, 
  Users, 
  BarChart3, 
  PieChart, 
  Settings, 
  X,
  Sparkles
} from 'lucide-react';

interface SidebarProps {
  onClose?: () => void;
}

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Users, label: 'Sales list', active: false },
  { icon: Target, label: 'Goals', active: false },
  { icon: BarChart3, label: 'Reports', active: false },
  { icon: PieChart, label: 'Analytics', active: false },
];

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  return (
    <aside className="w-72 flex-shrink-0 bg-white border-r border-gray-100 flex flex-col h-full py-8 shadow-2xl lg:shadow-none">
      <div className="px-8 mb-10 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 bg-[#1A1A1A] rounded-[12px] flex items-center justify-center shadow-lg shadow-black/10">
            <Sparkles className="text-[#E67E7E] w-5 h-5" />
          </div>
          <span className="font-extrabold text-2xl tracking-tighter text-[#1A1A1A]">Lumina</span>
        </div>
        <button onClick={onClose} className="lg:hidden p-2 text-gray-400 hover:text-gray-600">
          <X className="w-6 h-6" />
        </button>
      </div>

      <nav className="flex-1 px-4 space-y-1.5">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center justify-between px-5 py-3.5 rounded-[16px] transition-all duration-300 group ${
              item.active 
                ? 'bg-[#FDF2F2] text-[#E67E7E] shadow-sm' 
                : 'text-gray-500 hover:bg-[#F7F5F3] hover:text-[#1A1A1A]'
            }`}
          >
            <div className="flex items-center space-x-4">
              <item.icon className={`w-[22px] h-[22px] transition-colors ${item.active ? 'text-[#E67E7E]' : 'text-gray-400 group-hover:text-[#1A1A1A]'}`} />
              <span className="font-bold text-sm tracking-tight">{item.label}</span>
            </div>
            {item.active && (
              <div className="w-1.5 h-1.5 rounded-full bg-[#E67E7E] ring-4 ring-[#E67E7E]/10" />
            )}
          </button>
        ))}
      </nav>

      <div className="px-5 mt-auto">
        <button className="w-full flex items-center space-x-4 px-5 py-3.5 text-gray-500 hover:bg-[#F7F5F3] hover:text-[#1A1A1A] rounded-[16px] transition-all mb-4">
          <Settings className="w-[22px] h-[22px]" />
          <span className="font-bold text-sm">Settings</span>
        </button>
        
        <div className="p-5 bg-[#F7F5F3] rounded-[24px] relative overflow-hidden group cursor-pointer border border-white">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2">
               <span className="px-2 py-0.5 bg-[#1A1A1A] text-[9px] font-black text-white rounded-md tracking-widest">PRO PLAN</span>
            </div>
            <p className="text-[11px] text-gray-500 font-medium leading-relaxed mb-4">Unlock precision forecasting and AI-driven growth insights.</p>
            <button className="w-full py-2.5 bg-white text-[#1A1A1A] text-xs font-extrabold rounded-xl shadow-sm hover:bg-[#E67E7E] hover:text-white transition-all transform group-active:scale-95">
              Upgrade Now
            </button>
          </div>
          <div className="absolute -right-6 -top-6 w-20 h-20 bg-[#E67E7E]/5 rounded-full blur-2xl group-hover:bg-[#E67E7E]/15 transition-all duration-500" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
