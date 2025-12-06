import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './property-detail.component.html',
  styleUrl: './property-detail.component.css'
})
export class PropertyDetailComponent {
  property = {
    id: 1,
    name: 'Sunset Apartments',
    address: '123 Sunset Blvd, Cityville',
    landlord: { name: 'Jane Smith', email: 'jane@example.com', phone: '+1 555-0102' },
    units: [
      { number: '101', tenant: 'Alice Smith', rent: 1200, status: 'Occupied' },
      { number: '102', tenant: 'Bob Jones', rent: 1200, status: 'Occupied' },
      { number: '103', tenant: '-', rent: 1200, status: 'Vacant' }
    ],
    status: 'Active'
  };
}

