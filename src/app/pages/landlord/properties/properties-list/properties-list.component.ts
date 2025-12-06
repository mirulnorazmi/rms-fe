import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-properties-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './properties-list.component.html',
  styleUrl: './properties-list.component.css'
})
export class PropertiesListComponent {
  properties = [
    { id: 1, name: 'Sunset Apartments', address: '123 Sunset Blvd', type: 'Apartment', units: 12, occupancy: '90%' },
    { id: 2, name: 'Downtown Condo', address: '456 Main St', type: 'Condo', units: 5, occupancy: '100%' },
    { id: 3, name: 'Lakeside Villa', address: '789 Lake Rd', type: 'House', units: 1, occupancy: '0%' },
  ];
}
