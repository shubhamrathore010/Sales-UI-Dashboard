
import { SalesAgent, DealSource, SalesDynamic, KPIStats } from './types';

export const COLORS = {
  primary: '#E67E7E', // Muted Coral
  charcoal: '#1A1A1A',
  gray: '#F7F5F3',
  softPink: '#FDF2F2',
  textMuted: '#6B7280',
};

export const MOCK_AGENTS: SalesAgent[] = [
  { id: '1', name: 'Sarah Jenkins', avatar: 'https://picsum.photos/seed/sarah/100/100', revenue: 45200, deals: 12, winRate: 72, leads: 120, contribution: 85 },
  { id: '2', name: 'Michael Chen', avatar: 'https://picsum.photos/seed/michael/100/100', revenue: 38400, deals: 9, winRate: 65, leads: 95, contribution: 72 },
  { id: '3', name: 'Emma Wilson', avatar: 'https://picsum.photos/seed/emma/100/100', revenue: 31200, deals: 8, winRate: 58, leads: 110, contribution: 60 },
  { id: '4', name: 'David Ross', avatar: 'https://picsum.photos/seed/david/100/100', revenue: 28900, deals: 7, winRate: 62, leads: 88, contribution: 55 },
  { id: '5', name: 'Elena Gomez', avatar: 'https://picsum.photos/seed/elena/100/100', revenue: 24500, deals: 6, winRate: 54, leads: 75, contribution: 48 },
];

export const MOCK_SOURCES: DealSource[] = [
  { name: 'Dribbble', value: 45000, color: '#E67E7E' },
  { name: 'Instagram', value: 32000, color: '#F8B4B4' },
  { name: 'Behance', value: 28000, color: '#FFDEDE' },
  { name: 'Google Search', value: 18000, color: '#1A1A1A' },
];

export const MOCK_DYNAMICS: SalesDynamic[] = [
  { month: 'Jan', revenue: 65000, target: 70000 },
  { month: 'Feb', revenue: 82000, target: 75000 },
  { month: 'Mar', revenue: 78000, target: 80000 },
  { month: 'Apr', revenue: 95000, target: 85000 },
  { month: 'May', revenue: 115000, target: 90000 },
  { month: 'Jun', revenue: 128430, target: 100000 },
];

export const MOCK_KPI: KPIStats = {
  totalRevenue: 128430,
  revenueGrowth: 12.5,
  topSalesPerson: 'Sarah Jenkins',
  bestDeal: 45000,
  dealsCount: 42,
  dealsGrowth: 8.2,
  winRate: 64,
  winRateGrowth: 2.1,
};
