import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LandlordDashboardComponent } from './pages/landlord/landlord-dashboard/landlord-dashboard.component';
import { TenantManagementComponent } from './pages/landlord/tenants/tenant-management.component';
import { MaintenanceHubComponent } from './pages/landlord/maintenance/maintenance-hub.component';
import { FinancialReportsComponent } from './pages/landlord/reports/financial-reports.component';
import { SmartContractVaultComponent } from './pages/landlord/documents/smart-contract-vault.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HistoryComponent } from './pages/tenant/payment/history/history.component';
import { SummaryComponent } from './pages/tenant/payment/summary/summary.component';
import { PayNowComponent } from './pages/tenant/payment/pay-now/pay-now.component';
import { TenantDashboardComponent } from './pages/tenant/dashboard/tenant-dashboard.component';
import { PropertyDetailsComponent } from './pages/tenant/property/property-details/property-details.component';
import { ContractViewerComponent } from './pages/tenant/contract/contract-viewer/contract-viewer.component';
import { TicketListComponent } from './pages/tenant/maintenance/ticket-list/ticket-list.component';
import { ReportIssueComponent } from './pages/tenant/maintenance/report-issue/report-issue.component';
import { TicketDetailComponent } from './pages/tenant/maintenance/ticket-detail/ticket-detail.component';
import { NotificationsComponent } from './pages/tenant/notifications/notifications.component';
import { DocumentVaultComponent } from './pages/tenant/documents/document-vault/document-vault.component';

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
  
  // Tenant Payment Routes
  { path: 'tenant/payment/summary', component: SummaryComponent },
  { path: 'tenant/payment/history', component: HistoryComponent },
  { path: 'tenant/payment/pay', component: PayNowComponent },
  { path: 'tenant/payments', redirectTo: 'tenant/payment/summary', pathMatch: 'full' },

  // Tenant Property & Contract
  { path: 'tenant/property/details', component: PropertyDetailsComponent },
  { path: 'tenant/contract/viewer', component: ContractViewerComponent },
  { path: 'tenant/contract', redirectTo: 'tenant/contract/viewer', pathMatch: 'full' }, // Alias

  // Tenant Maintenance Routes
  { path: 'tenant/maintenance/tickets', component: TicketListComponent },
  { path: 'tenant/maintenance/tickets/:id', component: TicketDetailComponent },
  { path: 'tenant/maintenance/report', component: ReportIssueComponent },
  { path: 'tenant/maintenance', redirectTo: 'tenant/maintenance/tickets', pathMatch: 'full' },

  // Tenant Notifications & Documents
  { path: 'tenant/notifications', component: NotificationsComponent },
  { path: 'tenant/documents', component: DocumentVaultComponent },

  { path: '**', component: NotFoundComponent },
];
