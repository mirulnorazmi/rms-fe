import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LandlordDashboardComponent } from './pages/landlord/landlord-dashboard/landlord-dashboard.component';
import { TenantManagementComponent } from './pages/landlord/tenants/tenant-management.component';
import { MaintenanceHubComponent } from './pages/landlord/maintenance/maintenance-hub.component';
import { FinancialReportsComponent } from './pages/landlord/reports/financial-reports.component';
import { SmartContractVaultComponent } from './pages/landlord/documents/smart-contract-vault.component';
import { PropertyListComponent } from './pages/landlord/properties/property-list/property-list.component';
import { PropertyDetailComponent } from './pages/landlord/properties/property-detail/property-detail.component';
import { TenantDashboardComponent } from './pages/tenant/dashboard/tenant-dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HistoryComponent } from './pages/tenant/payment/history/history.component';
import { SummaryComponent } from './pages/tenant/payment/summary/summary.component';
import { PayNowComponent } from './pages/tenant/payment/pay-now/pay-now.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  
  // Landlord Routes
  { path: 'landlord/dashboard', component: LandlordDashboardComponent },
  { path: 'landlord/tenants', component: TenantManagementComponent },
  { path: 'landlord/maintenance', component: MaintenanceHubComponent },
  { path: 'landlord/reports', component: FinancialReportsComponent },
  { path: 'landlord/contracts', component: SmartContractVaultComponent },
  { path: 'landlord/properties', component: PropertyListComponent },
  { path: 'landlord/properties/:id', component: PropertyDetailComponent },

  // Tenant Routes
  { path: 'tenant/dashboard', component: TenantDashboardComponent },
  
  // Tenant Payment Routes
  { path: 'tenant/payment/summary', component: SummaryComponent },
  { path: 'tenant/payment/history', component: HistoryComponent },
  { path: 'tenant/payment/pay', component: PayNowComponent },
  { path: 'tenant/payments', redirectTo: 'tenant/payment/summary', pathMatch: 'full' },

  { path: '**', component: NotFoundComponent },
];
