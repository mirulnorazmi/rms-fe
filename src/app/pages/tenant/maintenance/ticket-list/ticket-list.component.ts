import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent {
  tickets = [
    { id: 'TKT-101', title: 'Leaky Faucet', category: 'Plumbing', date: '2023-10-25', status: 'In Progress', priority: 'Normal' },
    { id: 'TKT-102', title: 'AC Not Cooling', category: 'Appliance', date: '2023-08-10', status: 'Closed', priority: 'High' },
  ];
}

