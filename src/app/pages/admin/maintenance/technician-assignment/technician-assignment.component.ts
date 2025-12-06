import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-technician-assignment',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './technician-assignment.component.html',
  styleUrl: './technician-assignment.component.css'
})
export class TechnicianAssignmentComponent {
  technicians = [
    { id: 1, name: 'Mike Ross', skill: 'HVAC', status: 'Available', activeJobs: 0 },
    { id: 2, name: 'Harvey S.', skill: 'Plumbing', status: 'Busy', activeJobs: 2 },
    { id: 3, name: 'Rachel Z.', skill: 'Electrical', status: 'Available', activeJobs: 0 },
  ];

  unassignedTickets = [
    { id: 'TKT-101', title: 'Leaky Faucet', category: 'Plumbing', property: 'Sunset Apts 101' },
    { id: 'TKT-105', title: 'Broken Window', category: 'General', property: 'Downtown 5A' }
  ];
}

