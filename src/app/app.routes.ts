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
import { PropertyListComponent } from './pages/landlord/properties/property-list/property-list.component';
import { PropertyDetailComponent } from './pages/landlord/properties/property-detail/property-detail.component';

import { UnitFormComponent } from './pages/landlord/properties/unit-form/unit-form.component';
import { PaymentOverviewComponent } from './pages/landlord/payments/payment-overview/payment-overview.component';
import { PaymentHistoryComponent } from './pages/landlord/payments/payment-history/payment-history.component';
import { PaymentAdjustmentComponent } from './pages/landlord/payments/payment-adjustment/payment-adjustment.component';
import { SendReminderComponent } from './pages/landlord/payments/send-reminder/send-reminder.component';
import { DocumentListComponent } from './pages/landlord/documents/document-list/document-list.component';
import { DocumentViewerComponent } from './pages/landlord/documents/document-viewer/document-viewer.component';
import { RegisterComponent } from './pages/register/register.component';

// Admin Components (New Module)
import { AdminDashboardComponent } from './pages/Newadmin/dashboard/admin-dashboard.component';
import { LandlordListComponent } from './pages/Newadmin/landlord/landlord-list/landlord-list.component';
import { LandlordDetailComponent } from './pages/Newadmin/landlord/landlord-detail/landlord-detail.component';
import { SubscriptionPlansComponent } from './pages/Newadmin/subscription/plans/subscription-plans.component';
import { PaymentLogsComponent } from './pages/Newadmin/subscription/logs/payment-logs.component';
import { PortalListComponent } from './pages/Newadmin/portal/portal-list/portal-list.component';
import { SystemSettingsComponent } from './pages/Newadmin/system/settings/system-settings.component';
import { AuditLogsComponent } from './pages/Newadmin/audit/logs/audit-logs.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  // Landlord Routes
  { path: 'landlord/dashboard', component: LandlordDashboardComponent },
  { path: 'landlord/tenants', component: TenantManagementComponent },
  { path: 'landlord/maintenance', component: MaintenanceHubComponent },
  { path: 'landlord/reports', component: FinancialReportsComponent },
  { path: 'landlord/contracts', component: SmartContractVaultComponent }, // Legacy/Placeholder
  { path: 'landlord/properties', component: PropertyListComponent },
  { path: 'landlord/properties/units', component: UnitFormComponent },
  { path: 'landlord/properties/units/add', component: UnitFormComponent },
  { path: 'landlord/properties/units/:id', component: UnitFormComponent },
  { path: 'landlord/properties/:id', component: PropertyDetailComponent },
  
  // Landlord Payments Routes
  { path: 'landlord/payments', redirectTo: 'landlord/payments/overview', pathMatch: 'full' },
  { path: 'landlord/payments/overview', component: PaymentOverviewComponent },
  { path: 'landlord/payments/history', component: PaymentHistoryComponent },
  { path: 'landlord/payments/adjustments', component: PaymentAdjustmentComponent },
  { path: 'landlord/payments/reminders', component: SendReminderComponent },

  // Landlord Document Vault
  { path: 'landlord/documents', component: DocumentListComponent },
  { path: 'landlord/documents/:id', component: DocumentViewerComponent },

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

  // Admin Routes
  { path: 'admin', redirectTo: 'admin/dashboard', pathMatch: 'full' },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'admin/landlords', component: LandlordListComponent },
  { path: 'admin/landlords/:id', component: LandlordDetailComponent },
  { path: 'admin/subscription/plans', component: SubscriptionPlansComponent },
  { path: 'admin/subscription/logs', component: PaymentLogsComponent },
  { path: 'admin/portals', component: PortalListComponent },
  { path: 'admin/system', component: SystemSettingsComponent },
  { path: 'admin/audit', component: AuditLogsComponent },

  { path: '**', component: NotFoundComponent },
];
