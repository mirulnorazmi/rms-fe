import { Routes } from '@angular/router';
import { PropertiesListComponent } from './properties/properties-list/properties-list.component';
import { PropertyFormComponent } from './properties/property-form/property-form.component';
import { UnitsListComponent } from './properties/units-list/units-list.component';
import { UnitFormComponent } from './properties/unit-form/unit-form.component';
import { UnitOccupancyComponent } from './properties/unit-occupancy/unit-occupancy.component';
import { TenantListComponent } from './tenants/tenant-list/tenant-list.component';
import { TenantProfileComponent } from './tenants/tenant-profile/tenant-profile.component';
import { TenantOnboardingComponent } from './tenants/tenant-onboarding/tenant-onboarding.component';
import { ContractListComponent } from './contracts/contract-list/contract-list.component';
import { ContractFormComponent } from './contracts/contract-form/contract-form.component';
import { ContractDetailComponent } from './contracts/contract-detail/contract-detail.component';
import { PaymentOverviewComponent } from './payments/payment-overview/payment-overview.component';
import { PaymentDetailComponent } from './payments/payment-detail/payment-detail.component';

export const landlordRoutes: Routes = [
  { path: '', redirectTo: 'properties', pathMatch: 'full' },
  
  // Properties & Units
  { path: 'properties', component: PropertiesListComponent },
  { path: 'properties/add', component: PropertyFormComponent },
  { path: 'properties/:id/edit', component: PropertyFormComponent },
  { path: 'properties/:id/units', component: UnitsListComponent },
  { path: 'properties/:id/units/add', component: UnitFormComponent },
  { path: 'properties/units/:unitId/edit', component: UnitFormComponent },
  { path: 'properties/units/:unitId/occupancy', component: UnitOccupancyComponent },

  // Tenants
  { path: 'tenants', component: TenantListComponent },
  { path: 'tenants/onboarding', component: TenantOnboardingComponent },
  { path: 'tenants/:id', component: TenantProfileComponent },

  // Contracts
  { path: 'contracts', component: ContractListComponent },
  { path: 'contracts/create', component: ContractFormComponent },
  { path: 'contracts/:id', component: ContractDetailComponent },

  // Payments
  { path: 'payments', component: PaymentOverviewComponent },
  { path: 'payments/:id', component: PaymentDetailComponent },
];

