
export interface SalesAgent {
  id: string;
  name: string;
  avatar: string;
  revenue: number;
  deals: number;
  winRate: number;
  leads: number;
  contribution: number;
}

export interface DealSource {
  name: string;
  value: number;
  color: string;
}

export interface SalesDynamic {
  month: string;
  revenue: number;
  target: number;
}

export interface KPIStats {
  totalRevenue: number;
  revenueGrowth: number;
  topSalesPerson: string;
  bestDeal: number;
  dealsCount: number;
  dealsGrowth: number;
  winRate: number;
  winRateGrowth: number;
}

export type TimeFrame = 'Monthly' | 'Quarterly' | 'Yearly';
