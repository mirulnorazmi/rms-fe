import { Routes } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { RoleManagerComponent } from './users/role-manager/role-manager.component';
import { AllPropertiesComponent } from './properties/all-properties/all-properties.component';
import { PropertyDetailComponent } from './properties/property-detail/property-detail.component';
import { ContractMasterComponent } from './contracts/contract-master/contract-master.component';
import { ContractVersionsComponent } from './contracts/contract-versions/contract-versions.component';
import { FinanceDashboardComponent } from './finance/finance-dashboard/finance-dashboard.component';
import { PaymentTransactionsComponent } from './finance/payment-transactions/payment-transactions.component';
import { DisputeReviewComponent } from './finance/dispute-review/dispute-review.component';
import { TicketBoardComponent } from './maintenance/ticket-board/ticket-board.component';
import { TechnicianAssignmentComponent } from './maintenance/technician-assignment/technician-assignment.component';
import { AutomationSettingsComponent } from './system/automation-settings/automation-settings.component';

export const adminRoutes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  
  // User Management
  { path: 'users', component: UserListComponent },
  { path: 'users/add', component: UserFormComponent },
  { path: 'users/:id/edit', component: UserFormComponent },
  { path: 'users/roles', component: RoleManagerComponent },

  // Properties
  { path: 'properties', component: AllPropertiesComponent },
  { path: 'properties/:id', component: PropertyDetailComponent },

  // Contracts
  { path: 'contracts', component: ContractMasterComponent },
  { path: 'contracts/:id/versions', component: ContractVersionsComponent },

  // Finance
  { path: 'finance', component: FinanceDashboardComponent },
  { path: 'finance/transactions', component: PaymentTransactionsComponent },
  { path: 'finance/disputes', component: DisputeReviewComponent },

  // Maintenance
  { path: 'maintenance/tickets', component: TicketBoardComponent },
  { path: 'maintenance/assignment', component: TechnicianAssignmentComponent },

  // System
  { path: 'system/automation', component: AutomationSettingsComponent },
];

