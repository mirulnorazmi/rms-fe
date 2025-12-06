import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dispute-review',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dispute-review.component.html',
  styleUrl: './dispute-review.component.css'
})
export class DisputeReviewComponent {
  disputes = [
    { id: 'DSP-001', raisedBy: 'Alice Smith', type: 'Rent Overcharge', amount: 100, date: '2023-10-20', status: 'Open' },
    { id: 'DSP-002', raisedBy: 'Landlord Tom', type: 'Damage Deposit', amount: 500, date: '2023-10-15', status: 'Under Review' }
  ];
}

