import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-report-issue',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './report-issue.component.html',
  styles: []
})
export class ReportIssueComponent {
  issue = {
    title: '',
    category: '',
    priority: 'Low',
    description: ''
  };

  isSubmitting = false;

  submitIssue() {
    this.isSubmitting = true;
    // Simulate API call
    setTimeout(() => {
      this.isSubmitting = false;
      // Handle success/redirect
    }, 1500);
  }
}

