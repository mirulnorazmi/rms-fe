import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pay-now',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './pay-now.component.html',
  styleUrl: './pay-now.component.css'
})
export class PayNowComponent {
  amount = 1240;
  selectedMethod = 'card';
  isProcessing = false;
  isSuccess = false;

  savedMethods = [
    { id: 'card', name: 'Visa ending in 4242', icon: '💳' },
    { id: 'bank', name: 'Chase Bank ****8899', icon: '🏦' }
  ];

  processPayment() {
    this.isProcessing = true;
    setTimeout(() => {
      this.isProcessing = false;
      this.isSuccess = true;
    }, 2000);
  }
}

