import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landlord-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landlord-dashboard.component.html',
  styleUrls: ['./landlord-dashboard.component.css'],
})
export class LandlordDashboardComponent {
  userRole = 'Landlord';
  currentDate = new Date();

  // Use Case 2 & 6: Financials
  financialStats = {
    collected: 12500,
    expected: 15000,
    progress: 83, // percentage
    pendingCount: 4 // number of tenants who haven't paid
  };

  // Use Case 4: Occupancy
  occupancyStats = {
    total: 12,
    occupied: 10,
    vacant: 2,
    rate: 83
  };

  // Use Case 14: Predictive Analytics (The Hackathon "Wow" Factor)
  aiInsights = [
    {
      type: 'risk',
      message: 'Tenant in Unit 302 has a 85% risk of late payment this month.',
      action: 'Send Reminder',
      severity: 'high' // for coloring
    },
    {
      type: 'vacancy',
      message: 'Predicted vacancy for Unit 105 in 45 days based on market trends.',
      action: 'List Property',
      severity: 'medium'
    }
  ];

  // Use Case 5: Prioritized Maintenance
  urgentMaintenance = [
    { id: 'T-101', unit: 'Unit 204', issue: 'Water Leak', priority: 'High', reported: '2 hrs ago' },
    { id: 'T-102', unit: 'Unit 101', issue: 'AC Malfunction', priority: 'Medium', reported: '5 hrs ago' }
  ];

  // Use Case 15: Automated Workflow triggers
  quickActions = [
    { label: 'Approve Lease', count: 1, color: 'btn-primary' },
    { label: 'Review Expenses', count: 0, color: 'btn-secondary' },
    { label: 'Add Property', count: 0, color: 'btn-outline' }
  ];
}