import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ticket-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ticket-detail.component.html',
  styles: []
})
export class TicketDetailComponent {
  ticket = {
    id: 'TKT-2023-104',
    title: 'AC Unit Making Noise',
    status: 'In Progress',
    category: 'HVAC',
    priority: 'High',
    created: 'Nov 3, 2023',
    description: 'The AC unit in the living room is making a loud rattling noise whenever it turns on. It seems to be cooling fine, but the noise is very disruptive.',
    updates: [
      { date: 'Nov 4, 2023 10:00 AM', author: 'System', text: 'Ticket assigned to Tech: Mike R.', type: 'system' },
      { date: 'Nov 4, 2023 02:30 PM', author: 'Mike R. (Tech)', text: 'Scheduled visit for Nov 6 at 9 AM.', type: 'comment' },
      { date: 'Nov 3, 2023 09:15 AM', author: 'Alice Smith (You)', text: 'Ticket created.', type: 'system' }
    ]
  };
}

