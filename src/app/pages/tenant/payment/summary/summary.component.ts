import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-payment-summary',
    imports: [CommonModule, RouterLink],
    templateUrl: './summary.component.html',
    styleUrl: './summary.component.css'
})
export class SummaryComponent {
  rentDetails = {
    month: 'November 2023',
    dueDate: 'Nov 1, 2023',
    status: 'Unpaid',
    breakdown: [
      { item: 'Base Rent', amount: 1200 },
      { item: 'Water Utility', amount: 45 },
      { item: 'Garbage Fee', amount: 15 },
      { item: 'Late Fee', amount: 0 } // Example adjustment
    ],
    discounts: [
      { item: 'Early Bird Discount', amount: -20 }
    ],
    total: 1240
  };
}

