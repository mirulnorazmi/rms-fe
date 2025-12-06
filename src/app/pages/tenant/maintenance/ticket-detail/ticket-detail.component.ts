import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ticket-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './ticket-detail.component.html',
  styleUrl: './ticket-detail.component.css'
})
export class TicketDetailComponent {
  ticket = {
    id: 'TKT-101',
    title: 'Leaky Faucet',
    category: 'Plumbing',
    description: 'The kitchen faucet is dripping constantly.',
    priority: 'Normal',
    status: 'In Progress',
    createdDate: '2023-10-25',
    updates: [
      { date: '2023-10-25 10:00 AM', user: 'System', message: 'Ticket created' },
      { date: '2023-10-26 09:00 AM', user: 'Landlord', message: 'Plumber scheduled for tomorrow at 2 PM.' }
    ]
  };

  newMessage = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.ticket.updates.push({
        date: 'Just now',
        user: 'Me',
        message: this.newMessage
      });
      this.newMessage = '';
    }
  }
}

