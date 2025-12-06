import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/archive/register/register.component';
import { LandlordDashboardComponent } from './pages/landlord/landlord-dashboard/landlord-dashboard.component';
import { TenantDashboardComponent } from './pages/tenant/dashboard/tenant-dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // Add others route here
  { path: 'login', component: LoginComponent },
  { path: 'landlord/dashboard', component: LandlordDashboardComponent },
  { path: 'tenant/dashboard', component: TenantDashboardComponent },
  { path: '**', component: NotFoundComponent },
];
