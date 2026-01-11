
import React from 'react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  BarChart, 
  Bar, 
  Cell 
} from 'recharts';
import { MOCK_DYNAMICS, MOCK_SOURCES, COLORS } from '../../constants/dashboard.constants';
import { Card } from '../ui/Card';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1A1A1A] text-white p-4 rounded-[16px] shadow-2xl border border-white/10 backdrop-blur-md">
        <p className="text-xs font-black uppercase tracking-[0.2em] mb-2 text-[#E67E7E]">{label}</p>
        <div className="space-y-2">
          <div className="flex items-center justify-between space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-[#E67E7E]" />
              <span className="text-[11px] font-bold text-gray-300">Revenue</span>
            </div>
            <span className="text-xs font-black">${payload[0].value.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-gray-600" />
              <span className="text-[11px] font-bold text-gray-400">Target</span>
            </div>
            <span className="text-xs font-black text-gray-400">${payload[1].value.toLocaleString()}</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export const SalesDynamicsChart: React.FC = () => (
  <Card className="h-[420px] flex flex-col">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
      <div>
        <h3 className="text-xl font-black text-[#1A1A1A] tracking-tight">Sales Dynamics</h3>
        <p className="text-[13px] text-gray-400 font-semibold mt-0.5">Performance tracking vs monthly targets</p>
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E67E7E] ring-4 ring-[#E67E7E]/10" />
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Revenue</span>
        </div>
        <div className="flex items-center space-x-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-100 ring-4 ring-gray-100" />
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Target</span>
        </div>
      </div>
    </div>
    
    <div className="flex-1 w-full min-h-0">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={MOCK_DYNAMICS} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#E67E7E" stopOpacity={0.15}/>
              <stop offset="95%" stopColor="#E67E7E" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="6 6" vertical={false} stroke="#F3F4F6" />
          <XAxis 
            dataKey="month" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#9CA3AF', fontSize: 11, fontWeight: 700 }}
            dy={15}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#9CA3AF', fontSize: 11, fontWeight: 700 }}
            tickFormatter={(value) => `$${value/1000}k`}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#E5E7EB', strokeWidth: 1.5, strokeDasharray: '4 4' }} />
          <Area 
            type="monotone" 
            dataKey="revenue" 
            stroke="#E67E7E" 
            strokeWidth={4} 
            fillOpacity={1} 
            fill="url(#colorRevenue)" 
            animationDuration={2000}
          />
          <Area 
            type="monotone" 
            dataKey="target" 
            stroke="#E5E7EB" 
            strokeWidth={2} 
            strokeDasharray="8 8" 
            fill="transparent" 
            animationDuration={2000}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </Card>
);

export const DealSourcesChart: React.FC = () => (
  <Card className="h-[420px] flex flex-col">
    <div className="mb-10">
      <h3 className="text-xl font-black text-[#1A1A1A] tracking-tight">Deal Sources</h3>
      <p className="text-[13px] text-gray-400 font-semibold mt-0.5">Volume breakdown by platform</p>
    </div>

    <div className="flex-1 min-h-0">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={MOCK_SOURCES} layout="vertical" barSize={28} margin={{ left: -30 }}>
          <XAxis type="number" hide />
          <YAxis 
            type="category" 
            dataKey="name" 
            axisLine={false} 
            tickLine={false}
            tick={{ fill: '#1A1A1A', fontSize: 13, fontWeight: 800 }}
            width={100}
          />
          <Tooltip 
            cursor={{ fill: '#F7F5F3', radius: 8 }}
            contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', fontSize: '12px', fontWeight: 'bold' }}
          />
          <Bar dataKey="value" radius={[0, 10, 10, 0]} animationDuration={1500}>
            {MOCK_SOURCES.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>

    <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
      <div className="flex flex-col">
        <span className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">Peak Source</span>
        <span className="text-[15px] font-black text-[#1A1A1A]">Dribbble Portfolio</span>
      </div>
      <div className="text-right flex flex-col">
        <span className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">Total Value</span>
        <span className="text-[15px] font-black text-[#E67E7E] tracking-tighter">$123.4k</span>
      </div>
    </div>
  </Card>
);
