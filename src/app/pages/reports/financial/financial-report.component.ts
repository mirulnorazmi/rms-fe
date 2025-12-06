import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-financial-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './financial-report.component.html',
  styleUrl: './financial-report.component.css'
})
export class FinancialReportComponent {
  period = 'Last 12 Months';
  summary = {
    totalRevenue: 150000,
    totalExpenses: 45000,
    netIncome: 105000,
    outstanding: 5200
  };

  monthlyData = [
    { month: 'Jan', revenue: 12000, expense: 3000 },
    { month: 'Feb', revenue: 12500, expense: 3200 },
    { month: 'Mar', revenue: 11800, expense: 4500 },
    { month: 'Apr', revenue: 13000, expense: 3100 },
  ];
}

