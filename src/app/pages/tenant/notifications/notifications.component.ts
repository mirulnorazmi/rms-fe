import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Notification {
  id: string;
  type: 'payment' | 'ticket' | 'contract' | 'system';
  title: string;
  message: string;
  time: string;
  read: boolean;
  priority: 'high' | 'medium' | 'low';
}

@Component({
    selector: 'app-notifications',
    imports: [CommonModule, RouterLink],
    templateUrl: './notifications.component.html',
    styles: []
})
export class NotificationsComponent {
  notifications: Notification[] = [
    {
      id: '1',
      type: 'payment',
      title: 'Rent Overdue Warning',
      message: 'Your rent for November is 2 days overdue. Please pay immediately to avoid late fees.',
      time: '2 hours ago',
      read: false,
      priority: 'high'
    },
    {
      id: '2',
      type: 'ticket',
      title: 'Maintenance Update',
      message: 'Technician assigned to ticket #TKT-104 (AC Unit). Scheduled for Nov 6.',
      time: 'Yesterday',
      read: false,
      priority: 'medium'
    },
    {
      id: '3',
      type: 'contract',
      title: 'Lease Renewal Window Open',
      message: 'Your lease ends in 60 days. You can now view renewal options.',
      time: '3 days ago',
      read: true,
      priority: 'medium'
    },
    {
      id: '4',
      type: 'system',
      title: 'System Maintenance',
      message: 'The portal will be down for maintenance on Sunday from 2 AM to 4 AM.',
      time: '1 week ago',
      read: true,
      priority: 'low'
    }
  ];

  markAllAsRead() {
    this.notifications.forEach(n => n.read = true);
  }

  markAsRead(id: string) {
    const notif = this.notifications.find(n => n.id === id);
    if (notif) notif.read = true;
  }

  deleteNotification(id: string) {
    this.notifications = this.notifications.filter(n => n.id !== id);
  }

  getIcon(type: string): string {
    switch (type) {
      case 'payment': return '💰';
      case 'ticket': return '🔧';
      case 'contract': return '📄';
      default: return '🔔';
    }
  }
}
