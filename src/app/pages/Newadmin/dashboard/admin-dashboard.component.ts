import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styles: []
})
export class AdminDashboardComponent implements OnInit {
  private authService = inject(AuthService);

  stats = [
    { title: 'Total Landlords', value: '124', desc: '+12% this month', icon: 'users', color: 'primary' },
    { title: 'Active Subscriptions', value: '89', desc: '72% conversion', icon: 'credit-card', color: 'success' },
    { title: 'Total Units', value: '1,240', desc: 'Managed units', icon: 'home', color: 'info' },
    { title: 'System Health', value: '99.9%', desc: 'Uptime', icon: 'activity', color: 'warning' }
  ];

  ngOnInit() {
    // TEMPORARY: Switch to admin role when visiting this page for testing
    this.authService.setRole('admin');
  }
}

