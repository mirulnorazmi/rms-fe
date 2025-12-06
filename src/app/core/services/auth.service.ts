import { Injectable, signal } from '@angular/core';

export type UserRole = 'landlord' | 'tenant' | 'guest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Using Angular Signals for reactive state
  currentUserRole = signal<UserRole>('landlord'); 

  constructor() {
    // Check if running in browser
    if (this.isBrowser()) {
      const storedRole = localStorage.getItem('userRole') as UserRole;
      if (storedRole) {
        this.currentUserRole.set(storedRole);
      } else {
        // Default to landlord if no role stored
        this.currentUserRole.set('landlord');
        localStorage.setItem('userRole', 'landlord');
      }
    }
  }

  setRole(role: UserRole) {
    this.currentUserRole.set(role);
    if (this.isBrowser()) {
      localStorage.setItem('userRole', role);
    }
  }

  getRole() {
    return this.currentUserRole();
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
