import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-logs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-logs.component.html',
  styles: []
})
export class PaymentLogsComponent {
  logs = [
    { date: '2024-09-20', landlord: 'Apex Realty', amount: '$199.00', status: 'Success', method: 'Stripe' },
    { date: '2024-09-19', landlord: 'John Doe Properties', amount: '$29.00', status: 'Failed', method: 'PayPal' },
    { date: '2024-09-18', landlord: 'City Living', amount: '$79.00', status: 'Success', method: 'Stripe' }
  ];
}

