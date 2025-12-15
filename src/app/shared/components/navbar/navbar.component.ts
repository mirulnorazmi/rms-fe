import { Component, inject, Output, EventEmitter, Input } from '@angular/core';

import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
    selector: 'app-navbar',
    imports: [RouterLink, RouterLinkActive, ThemeToggleComponent],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
// ... existing code ...

export class NavbarComponent {
  authService = inject(AuthService);
  router = inject(Router);

  @Input() user: any = {
    name: 'Demo User',
    role: 'Admin',
    avatar: 'https://img.daisyui.com/images/profile/demo/yellingcat@192.webp'
  };

  @Output() selectView = new EventEmitter<string>();
  @Output() logout = new EventEmitter<void>();

  isMenuOpen = false;

  // Menu configurations for each role
  menus = {
    landlord: [
      { id: 'dashboard', label: 'Dashboard', route: '/landlord/dashboard' },
      { id: 'tenants', label: 'My Tenants', route: '/landlord/tenants' },
      { id: 'maintenance', label: 'Maintenance Hub', route: '/landlord/maintenance' },
      { id: 'reports', label: 'Reports', route: '/landlord/reports' },
      // { id: 'contracts', label: 'Contracts', route: '/landlord/contracts' },
      { id: 'properties', label: 'Properties', route: '/landlord/properties' },
      { id: 'payments', label: 'Payments', route: '/landlord/payments' },
      { id: 'documents', label: 'Documents', route: 'landlord/documents' }
    ],
    tenant: [
      { id: 'dashboard', label: 'Dashboard', route: '/tenant/dashboard' },
      { id: 'payments', label: 'Payments', route: '/tenant/payments' },
      { id: 'maintenance', label: 'Property', route: 'tenant/property/details' },
      // { id: 'contract', label: 'Contract', route: '/tenant/contract' },
      { id: 'Maintenance', label: 'Maintenance', route: '/tenant/maintenance/tickets' },
      { id: 'Documents', label: 'Documents', route: '/tenant/documents' }
    ],
    guest: [
      { id: 'login', label: 'Login', route: '/login' },
      { id: 'register', label: 'Register', route: '/register' }
    ]
  };

  get menuItems() {
    const role = this.authService.currentUserRole();
    return this.menus[role] || this.menus['guest'];
  }

  get currentRole() {
    return this.authService.currentUserRole();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleLogout() {
    this.authService.setRole('guest');
    this.logout.emit();
    this.router.navigate(['/login']);
  }
}