import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tenant-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tenant-list.component.html',
  styleUrl: './tenant-list.component.css'
})
export class TenantListComponent {
  tenants = [
    { id: 1, name: 'Alice Smith', property: 'Sunset Apts - 101', status: 'Active', phone: '+1 555-0123', email: 'alice@example.com' },
    { id: 2, name: 'Bob Jones', property: 'Sunset Apts - 102', status: 'Pending', phone: '+1 555-0124', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Brown', property: 'Downtown Condo - 5A', status: 'Past', phone: '+1 555-0125', email: 'charlie@example.com' },
  ];
}

