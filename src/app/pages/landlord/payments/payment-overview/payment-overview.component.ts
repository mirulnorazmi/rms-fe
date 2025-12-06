import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment-overview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './payment-overview.component.html',
  styleUrl: './payment-overview.component.css'
})
export class PaymentOverviewComponent {
  payments = [
    { id: 'PAY-1001', tenant: 'Alice Smith', property: 'Sunset - 101', amount: 1200, date: '2023-10-01', status: 'Paid', type: 'Rent' },
    { id: 'PAY-1002', tenant: 'Bob Jones', property: 'Sunset - 102', amount: 900, date: '2023-10-05', status: 'Pending', type: 'Rent' },
    { id: 'PAY-1003', tenant: 'Charlie Brown', property: 'Downtown - 5A', amount: 50, date: '2023-09-28', status: 'Paid', type: 'Utility' },
  ];
  
  stats = [
      { title: 'Total Revenue', value: '$12,500', icon: '💰' },
      { title: 'Pending', value: '$2,300', icon: '⏳' },
      { title: 'Overdue', value: '$0', icon: '⚠️' },
  ];
}

