import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-automation-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './automation-settings.component.html',
  styleUrl: './automation-settings.component.css'
})
export class AutomationSettingsComponent {
  settings = {
    autoAssignTickets: true,
    autoRemindRent: true,
    aiChatbotEnabled: true,
    lowStockAlerts: false,
    emailNotifications: true
  };
}

