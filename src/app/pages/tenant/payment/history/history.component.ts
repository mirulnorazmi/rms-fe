import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  payments = [
    { id: 'INV-2023-10', date: 'Oct 1, 2023', amount: 1240, status: 'Paid', method: 'Credit Card' },
    { id: 'INV-2023-09', date: 'Sep 1, 2023', amount: 1240, status: 'Paid', method: 'Bank Transfer' },
    { id: 'INV-2023-08', date: 'Aug 1, 2023', amount: 1200, status: 'Paid', method: 'Bank Transfer' },
  ];
}

