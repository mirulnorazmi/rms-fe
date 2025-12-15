import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialReport, RentAdjustment } from '../../../core/models/financial-report.model';
import { FinancialService } from '../../../core/services/mock/financial.service';

@Component({
    selector: 'app-financial-reports',
    imports: [CommonModule],
    templateUrl: './financial-reports.component.html',
    styles: []
})
export class FinancialReportsComponent implements OnInit {
  private financialService = inject(FinancialService);
  reports: FinancialReport[] = [];
  adjustments: RentAdjustment[] = [];

  ngOnInit() {
    this.financialService.getReports().subscribe(data => {
      this.reports = data;
    });
    this.financialService.getRentAdjustments().subscribe(data => {
      this.adjustments = data;
    });
  }

  approveAdjustment(id: string) {
    // Logic to approve
    const adj = this.adjustments.find(a => a.id === id);
    if (adj) adj.status = 'Approved';
  }

  rejectAdjustment(id: string) {
    // Logic to reject
    const adj = this.adjustments.find(a => a.id === id);
    if (adj) adj.status = 'Rejected';
  }
}

