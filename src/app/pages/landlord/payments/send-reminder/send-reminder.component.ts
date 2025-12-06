import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-send-reminder',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './send-reminder.component.html',
  styles: []
})
export class SendReminderComponent {
  reminder = {
    tenantId: '',
    template: 'overdue',
    method: 'email',
    message: ''
  };

  templates: any = {
    overdue: "Dear [Tenant], your rent payment of [Amount] was due on [Date]. Please pay immediately to avoid late fees.",
    upcoming: "Hi [Tenant], this is a friendly reminder that your rent is due on [Date].",
    custom: ""
  };

  onTemplateChange() {
    this.reminder.message = this.templates[this.reminder.template];
  }

  sendReminder() {
    console.log('Sending reminder:', this.reminder);
    // Logic to send
  }
}

