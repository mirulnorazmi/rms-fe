import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/archive/register/register.component';
import { LandlordDashboardComponent } from './pages/landlord/landlord-dashboard/landlord-dashboard.component';
import { TenantDashboardComponent } from './pages/tenant/dashboard/tenant-dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HistoryComponent } from './pages/tenant/payment/history/history.component';
import { SummaryComponent } from './pages/tenant/payment/summary/summary.component';
import { PayNowComponent } from './pages/tenant/payment/pay-now/pay-now.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // Add others route here
  { path: 'login', component: LoginComponent },
  { path: 'landlord/dashboard', component: LandlordDashboardComponent },
  { path: 'tenant/dashboard', component: TenantDashboardComponent },
  
  // Tenant Payment Routes
  { path: 'tenant/payment/summary', component: SummaryComponent },
  { path: 'tenant/payment/history', component: HistoryComponent },
  { path: 'tenant/payment/pay', component: PayNowComponent },
  { path: 'tenant/payments', redirectTo: 'tenant/payment/summary', pathMatch: 'full' },

  { path: '**', component: NotFoundComponent },
];
