import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-properties',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './all-properties.component.html',
  styleUrl: './all-properties.component.css'
})
export class AllPropertiesComponent {
  properties = [
    { id: 1, name: 'Sunset Apartments', address: '123 Sunset Blvd', landlord: 'Jane Smith', units: 12, status: 'Active' },
    { id: 2, name: 'Downtown Condo', address: '456 Main St', landlord: 'Jane Smith', units: 5, status: 'Active' },
    { id: 3, name: 'Lakeside Villa', address: '789 Lake Rd', landlord: 'Tom Wilson', units: 1, status: 'Maintenance' },
  ];
}

