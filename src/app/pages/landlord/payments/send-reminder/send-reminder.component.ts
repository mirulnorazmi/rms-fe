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
  tenants = [
    { id: '1', name: 'Haris', unit: 'Unit 105', status: '5 Days Late' },
    { id: '2', name: 'Zaidd', unit: 'Unit 202', status: '5 Days Late' },
    { id: '3', name: 'Charlie Green', unit: 'Unit 305', status: '2 Days Late' },
    { id: '4', name: 'David Black', unit: 'Unit 401', status: '1 Day Late' }
  ];

  reminder = {
    selectedTenants: [] as string[],
    template: 'overdue',
    method: 'email',
    message: ''
  };

  templates: any = {
    overdue: "Dear [Tenant], your rent payment of [Amount] was due on [Date]. Please pay immediately to avoid late fees.",
    upcoming: "Hi [Tenant], this is a friendly reminder that your rent is due on [Date].",
    custom: ""
  };

  constructor() {
    this.onTemplateChange(); // Initialize message
  }

  get isAllSelected(): boolean {
    return this.reminder.selectedTenants.length === this.tenants.length;
  }

  toggleAll() {
    if (this.isAllSelected) {
      this.reminder.selectedTenants = [];
    } else {
      this.reminder.selectedTenants = this.tenants.map(t => t.id);
    }
  }

  toggleTenant(id: string) {
    const index = this.reminder.selectedTenants.indexOf(id);
    if (index > -1) {
      this.reminder.selectedTenants.splice(index, 1);
    } else {
      this.reminder.selectedTenants.push(id);
    }
  }

  onTemplateChange() {
    this.reminder.message = this.templates[this.reminder.template];
  }

  sendReminder() {
    if (this.reminder.selectedTenants.length === 0) {
      alert('Please select at least one tenant.');
      return;
    }
    console.log('Sending reminder:', this.reminder);
    // Logic to send
  }
}
