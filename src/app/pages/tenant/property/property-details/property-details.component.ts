import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-property-details',
    imports: [CommonModule, RouterLink],
    templateUrl: './property-details.component.html',
    styles: []
})
export class PropertyDetailsComponent {
  property = {
    name: 'Sunset Apartments',
    address: '123 Main St, Springfield, IL 62704',
    unit: '101',
    type: '2 Bedroom, 1 Bath',
    size: '950 sq ft',
    rent: 1200,
    deposit: 1200,
    images: [
      'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp',
      'https://img.daisyui.com/images/stock/photo-1609692029010-dced3985ea71.webp'
    ],
    facilities: [
      { name: 'Parking Spot #42', icon: '🚗' },
      { name: 'In-unit Laundry', icon: '🧺' },
      { name: 'Gym Access', icon: '🏋️' },
      { name: 'Swimming Pool', icon: '🏊' },
      { name: 'High-Speed Internet', icon: '📶' }
    ]
  };

  landlord = {
    name: 'John Doe',
    company: 'Sunrise Property Management',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    avatar: 'https://img.daisyui.com/images/profile/demo/4@94.webp'
  };

  contractDates = {
    start: 'Jan 1, 2023',
    end: 'Dec 31, 2023',
    renewal: 'Dec 1, 2023'
  };
}

