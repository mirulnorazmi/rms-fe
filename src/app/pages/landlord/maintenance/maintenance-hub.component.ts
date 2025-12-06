import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketService } from '../../../core/services/mock/ticket.service';
import { MaintenanceTicket } from '../../../core/models/maintenance-ticket.model';

@Component({
  selector: 'app-maintenance-hub',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './maintenance-hub.component.html',
  styles: []
})
export class MaintenanceHubComponent implements OnInit {
  private ticketService = inject(TicketService);
  tickets: MaintenanceTicket[] = [];
  selectedTicket: MaintenanceTicket | null = null;

  ngOnInit() {
    this.ticketService.getTickets().subscribe(data => {
      this.tickets = data;
    });
  }

  selectTicket(ticket: MaintenanceTicket) {
    this.selectedTicket = ticket;
  }

  getPriorityClass(priority: string): string {
    switch (priority) {
      case 'High': return 'badge-error';
      case 'Medium': return 'badge-warning';
      case 'Low': return 'badge-info';
      default: return 'badge-ghost';
    }
  }
}

