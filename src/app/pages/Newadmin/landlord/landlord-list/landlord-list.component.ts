import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landlord-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './landlord-list.component.html',
  styles: []
})
export class LandlordListComponent {
  landlords = [
    { id: 1, name: 'Apex Realty', plan: 'Enterprise', units: 45, status: 'Active', portal: 'apex.rentals.com' },
    { id: 2, name: 'John Doe Properties', plan: 'Basic', units: 5, status: 'Active', portal: 'johndoe.rentals.com' },
    { id: 3, name: 'City Living', plan: 'Pro', units: 12, status: 'Suspended', portal: 'cityliving.rentals.com' }
  ];
}

