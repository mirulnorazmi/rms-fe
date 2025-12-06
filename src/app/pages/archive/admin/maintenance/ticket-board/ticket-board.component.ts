import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Ticket {
  id: string;
  title: string;
  priority: string;
  property: string;
  tech?: string;
}

@Component({
  selector: 'app-ticket-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-board.component.html',
  styleUrl: './ticket-board.component.css'
})
export class TicketBoardComponent {
  columns: { title: string; status: string; tickets: Ticket[] }[] = [
    { title: 'Open', status: 'Open', tickets: [
        { id: 'TKT-101', title: 'Leaky Faucet', priority: 'Low', property: 'Sunset Apts 101' },
        { id: 'TKT-105', title: 'Broken Window', priority: 'Normal', property: 'Downtown 5A' }
      ] 
    },
    { title: 'Assigned', status: 'Assigned', tickets: [
        { id: 'TKT-102', title: 'AC Repair', priority: 'High', property: 'Sunset Apts 102', tech: 'Mike R.' }
      ] 
    },
    { title: 'In Progress', status: 'In Progress', tickets: [] },
    { title: 'Resolved', status: 'Resolved', tickets: [
        { id: 'TKT-099', title: 'Pest Control', priority: 'Normal', property: 'Lakeside Villa' }
      ] 
    }
  ];
}
