import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-audit-logs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audit-logs.component.html',
  styles: []
})
export class AuditLogsComponent {
  activeTab = 'activity';

  logs = [
    { timestamp: '2024-09-21 10:30:00', user: 'Admin User', action: 'Created Landlord', details: 'Added "New Realty LLC"' },
    { timestamp: '2024-09-21 09:15:22', user: 'System', action: 'Subscription Renewal', details: 'Auto-renewed Apex Realty' },
    { timestamp: '2024-09-20 14:20:10', user: 'Admin User', action: 'Updated Settings', details: 'Changed Stripe API Key' }
  ];

  conflicts = [
    { timestamp: '2024-09-21 08:00:00', property: 'Unit 101', platform: 'Airbnb', issue: 'Double Booking with Direct' },
    { timestamp: '2024-09-19 14:30:00', property: 'Unit 305', platform: 'Booking.com', issue: 'Sync Failed' }
  ];

  errors = [
     { timestamp: '2024-09-21 11:00:00', service: 'Payment Gateway', error: 'Timeout connecting to Stripe', severity: 'High' },
     { timestamp: '2024-09-21 10:45:00', service: 'Email Service', error: 'SMTP Auth Failed', severity: 'Medium' }
  ];
}
