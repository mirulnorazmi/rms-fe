import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  notifications = [
    { title: 'Rent Due Reminder', message: 'Rent for Unit 101 is due in 3 days.', time: '2 hours ago', type: 'warning' },
    { title: 'Maintenance Update', message: 'Plumber scheduled for tomorrow at 10 AM.', time: '5 hours ago', type: 'info' },
    { title: 'New Message', message: 'Tenant John sent you a message.', time: '1 day ago', type: 'success' }
  ];
}

