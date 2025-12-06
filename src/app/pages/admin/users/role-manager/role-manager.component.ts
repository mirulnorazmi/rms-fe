import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-role-manager',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './role-manager.component.html',
  styleUrl: './role-manager.component.css'
})
export class RoleManagerComponent {
  roles = [
    { name: 'Admin', permissions: ['users.manage', 'properties.manage', 'finance.view', 'system.config'] },
    { name: 'Landlord', permissions: ['properties.manage', 'finance.view'] },
    { name: 'Tenant', permissions: ['properties.view', 'finance.pay'] }
  ];

  allPermissions = [
    'users.manage', 'users.view',
    'properties.manage', 'properties.view',
    'finance.manage', 'finance.view', 'finance.pay',
    'system.config'
  ];
}

