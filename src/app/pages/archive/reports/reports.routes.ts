import { Routes } from '@angular/router';
import { FinancialReportComponent } from './financial/financial-report.component';
import { OccupancyReportComponent } from './occupancy/occupancy-report.component';
import { PredictiveAnalyticsComponent } from './analytics/predictive-analytics.component';

export const reportRoutes: Routes = [
  { path: '', redirectTo: 'financial', pathMatch: 'full' },
  { path: 'financial', component: FinancialReportComponent },
  { path: 'occupancy', component: OccupancyReportComponent },
  { path: 'analytics', component: PredictiveAnalyticsComponent },
];

