import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tenant-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tenant-dashboard.component.html',
  styleUrls: ['./tenant-dashboard.component.css']
})
export class TenantDashboardComponent {
  tenantName = 'Alice Smith';
  rentDue = { amount: 1200, date: '2023-11-01', status: 'Due Soon' };
  activeTickets = [
    { id: 101, title: 'Leaky Faucet', status: 'In Progress' }
  ];
  nextPaymentDate = 'Nov 1, 2023';
}
