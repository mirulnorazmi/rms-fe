import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tenant } from '../../models/tenant.model';

@Injectable({
  providedIn: 'root'
})
export class TenantService {
  private mockTenants: Tenant[] = [
    {
      id: 't1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      unitId: 'u101',
      propertyId: 'p1',
      onboardingStatus: 'Active',
      leaseStart: '2023-01-01',
      leaseEnd: '2024-01-01',
      riskScore: 15,
      paymentStatus: 'On-time',
      avatarUrl: 'https://img.daisyui.com/images/profile/demo/2@94.webp'
    },
    {
      id: 't2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+1 (555) 987-6543',
      unitId: 'u102',
      propertyId: 'p1',
      onboardingStatus: 'Active',
      leaseStart: '2023-03-15',
      leaseEnd: '2024-03-15',
      riskScore: 85,
      paymentStatus: 'Late',
      avatarUrl: 'https://img.daisyui.com/images/profile/demo/3@94.webp'
    },
    {
      id: 't3',
      name: 'Robert Johnson',
      email: 'robert.j@example.com',
      phone: '+1 (555) 456-7890',
      unitId: 'u205',
      propertyId: 'p2',
      onboardingStatus: 'Pending',
      leaseStart: '2023-11-01',
      leaseEnd: '2024-11-01',
      riskScore: 40,
      paymentStatus: 'Pending',
      avatarUrl: 'https://img.daisyui.com/images/profile/demo/4@94.webp'
    }
  ];

  constructor() {}

  getTenants(): Observable<Tenant[]> {
    return of(this.mockTenants);
  }

  getTenantById(id: string): Observable<Tenant | undefined> {
    return of(this.mockTenants.find(t => t.id === id));
  }
}

