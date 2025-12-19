import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subscription-plans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subscription-plans.component.html',
  styles: []
})
export class SubscriptionPlansComponent {
  plans = [
    { name: 'Basic', price: '$29/mo', units: 'Up to 10', features: ['Portal Access', 'Basic Reports'] },
    { name: 'Pro', price: '$79/mo', units: 'Up to 50', features: ['Portal Access', 'Advanced Reports', 'Email Support'] },
    { name: 'Enterprise', price: '$199/mo', units: 'Unlimited', features: ['All Features', 'Priority Support', 'API Access'] }
  ];
}

