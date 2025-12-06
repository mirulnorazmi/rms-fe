import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '+1 234 567 890',
    role: 'Landlord',
    address: '123 Main St, City, Country'
  };

  isEditing = false;

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }
  
  saveProfile() {
      this.isEditing = false;
      // Logic to save profile
      console.log('Profile saved', this.user);
  }
}

