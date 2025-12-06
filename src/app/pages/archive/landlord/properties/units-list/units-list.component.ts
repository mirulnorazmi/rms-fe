import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-units-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './units-list.component.html',
  styleUrl: './units-list.component.css'
})
export class UnitsListComponent {
  propertyName = 'Sunset Apartments';
  units = [
    { number: '101', type: '2BHK', rent: 1200, status: 'Occupied', tenant: 'Alice Smith' },
    { number: '102', type: '1BHK', rent: 900, status: 'Vacant', tenant: '-' },
    { number: '201', type: '3BHK', rent: 1500, status: 'Maintenance', tenant: '-' },
  ];
}

