import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landlord-dashboard.component.html',
  styleUrl: './landlord-dashboard.component.css',
})
export class LandlordDashboardComponent {
  userRole: 'tenant' | 'landlord' | 'admin' = 'landlord'; // Default for demo

  stats = [
    { title: 'Total Properties', value: '12', icon: '🏠' },
    { title: 'Active Tenants', value: '8', icon: '👥' },
    { title: 'Pending Requests', value: '3', icon: '⏳' },
    { title: 'Monthly Revenue', value: '$12,500', icon: '💰' },
  ];
}
