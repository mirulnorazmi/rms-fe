import { Injectable, signal } from '@angular/core';

export type UserRole = 'admin' | 'landlord' | 'tenant' | 'guest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Using Angular Signals for reactive state
  currentUserRole = signal<UserRole>('admin'); // Default to admin for demo

  constructor() {}

  setRole(role: UserRole) {
    this.currentUserRole.set(role);
  }

  getRole() {
    return this.currentUserRole();
  }
}

