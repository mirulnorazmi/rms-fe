import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portal-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portal-list.component.html',
  styles: []
})
export class PortalListComponent {
  portals = [
    { name: 'Apex Rentals', url: 'apex.rentals.com', status: 'Active', created: '2023-01-15' },
    { name: 'John Doe Properties', url: 'johndoe.rentals.com', status: 'Active', created: '2023-03-20' },
    { name: 'City Living', url: 'cityliving.rentals.com', status: 'Disabled', created: '2023-06-10' }
  ];
}

