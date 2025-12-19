import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landlord-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './landlord-detail.component.html',
  styles: []
})
export class LandlordDetailComponent {
  // Mock data for detail view
  landlord = {
    id: 1,
    name: 'Apex Realty',
    email: 'contact@apex.com',
    plan: 'Enterprise',
    units: 45,
    status: 'Active',
    portal: 'apex.rentals.com',
    joined: '2023-05-12'
  };
}

