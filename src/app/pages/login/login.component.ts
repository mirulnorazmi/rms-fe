import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService, UserRole } from '../../core/services/auth.service';

@Component({
    selector: 'app-login',
    imports: [CommonModule, FormsModule, RouterLink],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  loginAs(role: UserRole) {
    this.authService.setRole(role);
    
    // Navigate based on role
    if (role === 'landlord') {
      this.router.navigate(['/landlord/dashboard']); // Assuming this route exists
    } else if (role === 'tenant') {
      this.router.navigate(['/tenant/dashboard']); // Assuming this route exists
    } else {
       this.router.navigate(['/dashboard']); // Default/Admin dashboard
    }
  }
}
