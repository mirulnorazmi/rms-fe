import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-property-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './property-form.component.html',
  styleUrl: './property-form.component.css'
})
export class PropertyFormComponent {
  property: any = {
    name: '',
    address: '',
    type: 'Apartment',
    units: 0
  };

  saveProperty() {
    console.log('Property saved:', this.property);
    // Logic to save property
  }
}

