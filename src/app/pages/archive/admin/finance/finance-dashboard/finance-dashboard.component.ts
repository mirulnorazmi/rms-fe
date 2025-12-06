import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-finance-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './finance-dashboard.component.html',
  styleUrl: './finance-dashboard.component.css'
})
export class FinanceDashboardComponent {
  stats = [
    { title: 'Total Revenue (YTD)', value: '$150,000', icon: '💰', class: 'text-primary' },
    { title: 'Pending Payments', value: '$5,200', icon: '⏳', class: 'text-warning' },
    { title: 'Failed Transactions', value: '$350', icon: '❌', class: 'text-error' },
    { title: 'Platform Fees', value: '$4,500', icon: '📊', class: 'text-secondary' }
  ];
}

