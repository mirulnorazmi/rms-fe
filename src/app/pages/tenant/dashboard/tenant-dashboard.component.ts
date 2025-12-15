import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-tenant-dashboard',
    imports: [CommonModule, RouterLink],
    templateUrl: './tenant-dashboard.component.html',
    styleUrls: ['./tenant-dashboard.component.css']
})
export class TenantDashboardComponent {
  tenantName = 'Alice Smith';
  
  // 2. Payment Overview
  rentStatus = {
    amount: 1200,
    dueDate: 'Nov 1, 2023',
    status: 'Unpaid', // Paid, Unpaid, Overdue
    history: [
      { month: 'Oct', amount: 1200, status: 'Paid' },
      { month: 'Sep', amount: 1200, status: 'Paid' },
      { month: 'Aug', amount: 1200, status: 'Paid' },
    ]
  };

  // 3. Property & Contract
  propertyDetails = {
    address: 'Sunset Apartments, 123 Main St',
    unit: '101',
    leaseStart: 'Jan 1, 2023',
    leaseEnd: 'Dec 31, 2023',
    renewalDate: 'Dec 1, 2023'
  };

  // 4. Maintenance Tickets
  maintenanceStats = {
    open: 1,
    inProgress: 1,
    closed: 5
  };
  
  recentTickets = [
    { id: 'TKT-102', title: 'Leaky Faucet', status: 'Open', date: 'Oct 28' },
    { id: 'TKT-101', title: 'Broken Window', status: 'In Progress', date: 'Oct 25' },
  ];

  // 5. Notifications
  notifications = [
    { type: 'alert-warning', message: 'Rent is due in 3 days!' },
    { type: 'alert-info', message: 'New response on ticket #TKT-101' }
  ];

  // 6. Document Vault
  documents = [
    { name: 'Lease Agreement.pdf', date: 'Jan 1, 2023' },
    { name: 'Move-in Inspection.jpg', date: 'Jan 1, 2023' }
  ];

  // 7. AI Insights
  aiInsights = {
    score: 85,
    rentForecast: 'Stable'
  };
}
