import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Tenant', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Landlord', status: 'Active' },
    { id: 3, name: 'Admin User', email: 'admin@example.com', role: 'Admin', status: 'Active' },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com', role: 'Tenant', status: 'Inactive' },
  ];
}

