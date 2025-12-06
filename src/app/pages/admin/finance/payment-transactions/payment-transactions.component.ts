import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment-transactions',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './payment-transactions.component.html',
  styleUrl: './payment-transactions.component.css'
})
export class PaymentTransactionsComponent {
  transactions = [
    { id: 'TXN-9923', date: '2023-10-25', payer: 'Alice Smith', type: 'Rent', amount: 1200, status: 'Success' },
    { id: 'TXN-9922', date: '2023-10-25', payer: 'Bob Jones', type: 'Rent', amount: 1200, status: 'Success' },
    { id: 'TXN-9921', date: '2023-10-24', payer: 'Charlie', type: 'Deposit', amount: 2400, status: 'Failed' },
  ];
}

