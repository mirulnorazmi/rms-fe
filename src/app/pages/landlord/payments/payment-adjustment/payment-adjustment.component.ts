import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-payment-adjustment',
    imports: [CommonModule, FormsModule, RouterLink],
    templateUrl: './payment-adjustment.component.html',
    styles: []
})
export class PaymentAdjustmentComponent {
  adjustment = {
    tenantId: '',
    type: '',
    amount: null,
    reason: ''
  };

  logs = [
    { date: 'Oct 2, 2023', tenant: 'John Doe', type: 'Discount', amount: -50, reason: 'Early Payment Bonus' },
    { date: 'Sep 15, 2023', tenant: 'Bob White', type: 'Late Fee', amount: 25, reason: 'Payment delayed by 5 days' }
  ];

  applyAdjustment() {
    console.log('Applying adjustment:', this.adjustment);
    // Logic to save
  }
}

