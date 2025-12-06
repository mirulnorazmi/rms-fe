import { Component, inject, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ThemeToggleComponent],
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
    admin: [
      { id: 'users', label: 'Users', route: '/admin/users' },
      { id: 'properties', label: 'Properties', route: '/admin/properties' },
      { id: 'contracts', label: 'Contracts', route: '/admin/contracts' },
      { id: 'finance', label: 'Payments', route: '/admin/finance' },
      { id: 'maintenance', label: 'Maintenance', route: '/admin/maintenance/tickets' },
      { id: 'reports', label: 'Reports', route: '/reports' }
    ],
    landlord: [
      { id: 'my-properties', label: 'My Properties', route: '/landlord/properties' },
      { id: 'tenants', label: 'Tenants', route: '/landlord/tenants' },
      { id: 'finance', label: 'Payments', route: '/landlord/payments' },
      { id: 'contracts', label: 'Contracts', route: '/landlord/contracts' }
    ],
    tenant: [
      { id: 'dashboard', label: 'Dashboard', route: '/tenant/dashboard' },
      { id: 'payments', label: 'Payments', route: '/tenant/payments' },
      { id: 'maintenance', label: 'Maintenance', route: '/tenant/maintenance/tickets' },
      { id: 'contract', label: 'Contract', route: '/tenant/contract' }
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