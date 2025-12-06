import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tenant-profile',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tenant-profile.component.html',
  styleUrl: './tenant-profile.component.css'
})
export class TenantProfileComponent {
  tenant = {
    id: 1,
    name: 'Alice Smith',
    email: 'alice@example.com',
    phone: '+1 555-0123',
    status: 'Active',
    joinedDate: '2023-01-01',
    address: 'Sunset Apartments, Unit 101',
    documents: [
      { name: 'Lease Agreement.pdf', date: '2023-01-01' },
      { name: 'ID Proof.jpg', date: '2022-12-28' }
    ],
    paymentHistory: [
      { date: '2023-10-01', amount: 1200, status: 'Paid' },
      { date: '2023-09-01', amount: 1200, status: 'Paid' }
    ]
  };
}

