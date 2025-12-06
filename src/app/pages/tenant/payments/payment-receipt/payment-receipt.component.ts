import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment-receipt',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './payment-receipt.component.html',
  styleUrl: './payment-receipt.component.css'
})
export class PaymentReceiptComponent {
  receipt = {
    id: 'RCP-12345',
    date: '2023-11-01 10:30 AM',
    amount: 1200,
    method: 'Credit Card ending in 4242',
    tenant: 'Alice Smith',
    property: 'Sunset Apartments - Unit 101',
    items: [
      { description: 'Rent - November 2023', amount: 1200 }
    ]
  };
}

