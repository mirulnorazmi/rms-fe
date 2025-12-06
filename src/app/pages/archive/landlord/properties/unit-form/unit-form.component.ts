import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-unit-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './unit-form.component.html',
  styleUrl: './unit-form.component.css'
})
export class UnitFormComponent {
  unit: any = {
    number: '',
    floor: '',
    type: '1BHK',
    rent: 0,
    size: '',
    features: []
  };

  saveUnit() {
    console.log('Unit saved:', this.unit);
  }
}

