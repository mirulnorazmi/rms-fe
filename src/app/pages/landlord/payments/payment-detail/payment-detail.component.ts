import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './payment-detail.component.html',
  styleUrl: './payment-detail.component.css'
})
export class PaymentDetailComponent {
  payment = {
    id: 'PAY-1001',
    date: '2023-10-01',
    amount: 1200,
    status: 'Paid',
    method: 'Bank Transfer',
    tenant: { name: 'Alice Smith', email: 'alice@example.com' },
    property: 'Sunset Apartments - Unit 101',
    period: 'October 2023',
    logs: [
      { date: '2023-10-01 10:30 AM', action: 'Payment Initiated' },
      { date: '2023-10-01 10:35 AM', action: 'Payment Successful' },
      { date: '2023-10-01 10:36 AM', action: 'Invoice Generated' }
    ]
  };
}

