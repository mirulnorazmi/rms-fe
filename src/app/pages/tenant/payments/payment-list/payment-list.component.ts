import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './payment-list.component.html',
  styleUrl: './payment-list.component.css'
})
export class PaymentListComponent {
  invoices = [
    { id: 'INV-2023-11', date: '2023-11-01', amount: 1200, status: 'Unpaid', dueDate: '2023-11-05' },
    { id: 'INV-2023-10', date: '2023-10-01', amount: 1200, status: 'Paid', dueDate: '2023-10-05' },
    { id: 'INV-2023-09', date: '2023-09-01', amount: 1200, status: 'Paid', dueDate: '2023-09-05' },
  ];
}

