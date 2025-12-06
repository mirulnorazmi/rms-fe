import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LandlordDashboardComponent } from './pages/landlord/landlord-dashboard/landlord-dashboard.component';
import { TenantManagementComponent } from './pages/landlord/tenants/tenant-management.component';
import { MaintenanceHubComponent } from './pages/landlord/maintenance/maintenance-hub.component';
import { FinancialReportsComponent } from './pages/landlord/reports/financial-reports.component';
import { SmartContractVaultComponent } from './pages/landlord/documents/smart-contract-vault.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TenantDashboardComponent } from './pages/tenant/dashboard/tenant-dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  
  // Landlord Routes
  { path: 'landlord/dashboard', component: LandlordDashboardComponent },
  { path: 'landlord/tenants', component: TenantManagementComponent },
  { path: 'landlord/maintenance', component: MaintenanceHubComponent },
  { path: 'landlord/reports', component: FinancialReportsComponent },
  { path: 'landlord/contracts', component: SmartContractVaultComponent },

  // Tenant Routes
  { path: 'tenant/dashboard', component: TenantDashboardComponent },
  
  { path: '**', component: NotFoundComponent },
];
