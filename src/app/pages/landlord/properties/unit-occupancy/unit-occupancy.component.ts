import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-unit-occupancy',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './unit-occupancy.component.html',
  styleUrl: './unit-occupancy.component.css'
})
export class UnitOccupancyComponent {
  unit = {
    number: '101',
    property: 'Sunset Apartments',
    status: 'Occupied',
    currentTenant: {
      name: 'Alice Smith',
      phone: '+1 555-0123',
      email: 'alice@example.com',
      leaseStart: '2023-01-01',
      leaseEnd: '2023-12-31'
    },
    paymentStatus: 'Paid',
    maintenanceRequests: [
      { id: 1, title: 'Leaky Faucet', status: 'Resolved', date: '2023-05-10' }
    ]
  };
}

