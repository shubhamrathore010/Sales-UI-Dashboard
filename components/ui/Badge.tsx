
import React from 'react';
import { TrendingUp } from 'lucide-react';

interface GrowthBadgeProps {
  value: number;
}

export const GrowthBadge: React.FC<GrowthBadgeProps> = ({ value }) => {
  const isPositive = value >= 0;
  return (
    <div className={`flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-black tracking-wide ${isPositive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
      <TrendingUp className="w-3.5 h-3.5" />
      <span>{isPositive ? '+' : ''}{value}%</span>
    </div>
  );
};

interface StatusBadgeProps {
  label: string;
  type?: 'success' | 'default';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ label, type = 'default' }) => (
  <div className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${
    type === 'success' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
  }`}>
    {label}
  </div>
);
