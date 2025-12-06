import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MaintenanceTicket } from '../../models/maintenance-ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private mockTickets: MaintenanceTicket[] = [
    {
      id: 'tk-101',
      title: 'Leaky Faucet in Kitchen',
      description: 'The kitchen faucet has been dripping constantly for 2 days.',
      priority: 'Low',
      status: 'Open',
      propertyId: 'p1',
      unitId: 'u101',
      reportedBy: 't1',
      reportedDate: '2023-10-25',
      aiSummary: 'Minor plumbing issue. Estimated repair cost: $50-100. DIY fix possible.'
    },
    {
      id: 'tk-102',
      title: 'AC Not Cooling',
      description: 'Air conditioner is blowing warm air. Temperature is 85F inside.',
      priority: 'High',
      status: 'In Progress',
      propertyId: 'p1',
      unitId: 'u102',
      reportedBy: 't2',
      reportedDate: '2023-10-26',
      assignedTo: 'tech-01',
      aiSummary: 'Urgent HVAC failure. Potential compressor issue. Requires professional HVAC technician immediately.'
    },
    {
      id: 'tk-103',
      title: 'Broken Window Latch',
      description: 'Bedroom window latch is loose and won\'t lock properly.',
      priority: 'Medium',
      status: 'Resolved',
      propertyId: 'p2',
      unitId: 'u205',
      reportedBy: 't3',
      reportedDate: '2023-10-20',
      aiSummary: 'Security concern. Recommend replacement of latch mechanism.'
    }
  ];

  constructor() {}

  getTickets(): Observable<MaintenanceTicket[]> {
    return of(this.mockTickets);
  }

  getTicketsByPriority(priority: string): Observable<MaintenanceTicket[]> {
    return of(this.mockTickets.filter(t => t.priority === priority));
  }
}

