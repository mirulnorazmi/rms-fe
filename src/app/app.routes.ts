import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { DocumentVaultComponent } from './pages/document-vault/document-vault.component';
import { MessagingComponent } from './pages/messaging/messaging.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'documents', component: DocumentVaultComponent },
  { path: 'messages', component: MessagingComponent },
  { 
    path: 'landlord', 
    loadChildren: () => import('./pages/landlord/landlord.routes').then(m => m.landlordRoutes) 
  },
  { 
    path: 'tenant', 
    loadChildren: () => import('./pages/tenant/tenant.routes').then(m => m.tenantRoutes) 
  },
  { 
    path: 'admin', 
    loadChildren: () => import('./pages/admin/admin.routes').then(m => m.adminRoutes) 
  },
  { 
    path: 'reports', 
    loadChildren: () => import('./pages/reports/reports.routes').then(m => m.reportRoutes) 
  },
];
