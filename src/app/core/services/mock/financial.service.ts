import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FinancialReport, RentAdjustment } from '../../models/financial-report.model';

@Injectable({
  providedIn: 'root'
})
export class FinancialService {
  private mockReports: FinancialReport[] = [
    {
      id: 'rep-2023-10',
      period: 'October 2023',
      revenue: 45000,
      expenses: 12000,
      netIncome: 33000,
      vacancyRate: 5,
      pendingRent: 2500,
      rentCollectionRate: 94.5
    },
    {
      id: 'rep-2023-09',
      period: 'September 2023',
      revenue: 44500,
      expenses: 15000,
      netIncome: 29500,
      vacancyRate: 8,
      pendingRent: 1000,
      rentCollectionRate: 97.8
    }
  ];

  private mockAdjustments: RentAdjustment[] = [
    {
      id: 'adj-001',
      tenantId: 't1',
      currentRent: 1200,
      proposedRent: 1300,
      reason: 'Market rate adjustment',
      status: 'Pending',
      effectiveDate: '2024-01-01'
    },
    {
      id: 'adj-002',
      tenantId: 't2',
      currentRent: 1500,
      proposedRent: 1650,
      reason: 'Lease renewal',
      status: 'Approved',
      effectiveDate: '2024-03-15'
    }
  ];

  constructor() {}

  getReports(): Observable<FinancialReport[]> {
    return of(this.mockReports);
  }

  getRentAdjustments(): Observable<RentAdjustment[]> {
    return of(this.mockAdjustments);
  }
}

