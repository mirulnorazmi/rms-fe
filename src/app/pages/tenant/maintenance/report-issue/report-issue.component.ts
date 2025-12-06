import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-report-issue',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './report-issue.component.html',
  styleUrl: './report-issue.component.css'
})
export class ReportIssueComponent {
  issue = {
    category: '',
    title: '',
    description: '',
    priority: 'Normal',
    files: []
  };

  submitIssue() {
    console.log('Issue reported:', this.issue);
    // Logic to submit issue
  }
}

