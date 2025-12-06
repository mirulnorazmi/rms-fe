import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pay-rent',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './pay-rent.component.html',
  styleUrl: './pay-rent.component.css'
})
export class PayRentComponent {
  amount = 1200;
  paymentMethod = 'credit_card';
  processing = false;
  success = false;

  processPayment() {
    this.processing = true;
    // Simulate payment gateway
    setTimeout(() => {
      this.processing = false;
      this.success = true;
    }, 2000);
  }
}

