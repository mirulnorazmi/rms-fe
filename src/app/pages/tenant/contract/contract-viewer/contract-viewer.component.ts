import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contract-viewer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './contract-viewer.component.html',
  styles: []
})
export class ContractViewerComponent {
  contract = {
    id: 'CNT-2023-101',
    title: 'Residential Lease Agreement',
    status: 'Active',
    startDate: 'Jan 1, 2023',
    endDate: 'Dec 31, 2023',
    pdfUrl: '#' // Placeholder
  };

  versions = [
    { version: 'v2.0', date: 'Jan 1, 2023', reason: 'Annual Renewal', status: 'Active' },
    { version: 'v1.1', date: 'Jun 15, 2022', reason: 'Addendum: Pet Policy', status: 'Superseded' },
    { version: 'v1.0', date: 'Jan 1, 2022', reason: 'Initial Lease', status: 'Expired' }
  ];

  timeline = [
    { date: 'Dec 1, 2023', event: 'Renewal Window Opens', status: 'upcoming' },
    { date: 'Dec 31, 2023', event: 'Lease Expiration', status: 'upcoming' },
    { date: 'Jan 1, 2023', event: 'Lease Started', status: 'completed' }
  ];
}

