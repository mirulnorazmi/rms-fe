import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  user: any = {
    firstName: '',
    lastName: '',
    email: '',
    role: 'Tenant',
    status: 'Active'
  };

  saveUser() {
    console.log('User saved:', this.user);
  }
}

