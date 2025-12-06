export interface FinancialReport {
  id: string;
  period: string; // e.g., "2023-10"
  revenue: number;
  expenses: number;
  netIncome: number;
  vacancyRate: number; // Percentage 0-100
  pendingRent: number;
  rentCollectionRate: number;
}

export interface RentAdjustment {
  id: string;
  tenantId: string;
  currentRent: number;
  proposedRent: number;
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  effectiveDate: string;
}

