import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-predictive-analytics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './predictive-analytics.component.html',
  styleUrl: './predictive-analytics.component.css'
})
export class PredictiveAnalyticsComponent {
  forecast = {
    nextMonthRevenue: 12800,
    occupancyTrend: 'Upwards',
    predictedVacancies: 2,
    maintenanceRisk: 'Moderate'
  };

  insights = [
    { title: 'Rent Optimization', message: 'Suggested increase of 5% for downtown units based on market demand.', type: 'opportunity' },
    { title: 'Churn Risk', message: '3 leases expiring next month have high risk of non-renewal.', type: 'risk' },
    { title: 'Maintenance Spike', message: 'Predicted HVAC maintenance costs will rise in July.', type: 'info' }
  ];
}

