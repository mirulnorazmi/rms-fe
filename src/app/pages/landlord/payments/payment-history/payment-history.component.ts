import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment-history',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './payment-history.component.html',
  styles: []
})
export class PaymentHistoryComponent {
  payments = [
    { id: 'INV-1001', tenant: 'John Doe', unit: '101', amount: 1200, date: 'Oct 1, 2023', method: 'Credit Card', status: 'Paid' },
    { id: 'INV-1002', tenant: 'Jane Smith', unit: '205', amount: 1100, date: 'Oct 1, 2023', method: 'Bank Transfer', status: 'Paid' },
    { id: 'INV-1003', tenant: 'Bob White', unit: '202', amount: 1150, date: 'Sep 5, 2023', method: 'Check', status: 'Paid' },
    { id: 'INV-1004', tenant: 'Alice Brown', unit: '105', amount: 1200, date: 'Oct 1, 2023', method: '-', status: 'Pending' },
  ];
}

