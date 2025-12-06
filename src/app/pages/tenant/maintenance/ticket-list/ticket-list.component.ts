import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ticket-list.component.html',
  styles: []
})
export class TicketListComponent {
  stats = {
    open: 2,
    inProgress: 1,
    closed: 12
  };

  tickets = [
    { 
      id: 'TKT-2023-105', 
      title: 'Leaky Faucet in Bathroom', 
      category: 'Plumbing',
      status: 'Open', 
      priority: 'Low',
      date: 'Nov 5, 2023',
      lastUpdate: '2 hours ago'
    },
    { 
      id: 'TKT-2023-104', 
      title: 'AC Unit Making Noise', 
      category: 'HVAC',
      status: 'In Progress', 
      priority: 'High',
      date: 'Nov 3, 2023',
      lastUpdate: 'Yesterday'
    },
    { 
      id: 'TKT-2023-103', 
      title: 'Broken Cabinet Hinge', 
      category: 'Carpentry',
      status: 'Closed', 
      priority: 'Low',
      date: 'Oct 28, 2023',
      lastUpdate: 'Oct 30, 2023'
    }
  ];

  getStatusColor(status: string): string {
    switch(status) {
      case 'Open': return 'badge-warning';
      case 'In Progress': return 'badge-info';
      case 'Closed': return 'badge-success';
      default: return 'badge-ghost';
    }
  }
}

