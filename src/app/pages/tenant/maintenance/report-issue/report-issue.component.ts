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
  showAiModal = false;
  isAnalyzing = false;

  aiResult = {
    priority: 'High',
    description: 'Based on the analysis of the uploaded images and details, this issue appears to be a severe plumbing failure potentially affecting building structure. Immediate attention is recommended.'
  };

  openAnalysisModal() {
    this.showAiModal = true;
    this.isAnalyzing = true;
    
    // Simulate AI analysis delay
    setTimeout(() => {
      this.isAnalyzing = false;
      this.issue.priority = this.aiResult.priority;
      this.issue.description = this.aiResult.description;
    }, 2000);
  }

  closeModal() {
    this.showAiModal = false;
  }

  confirmSubmission() {
    this.isSubmitting = true;
    // Simulate API call
    setTimeout(() => {
      this.isSubmitting = false;
      this.showAiModal = false;
      // Handle success/redirect
      console.log('Issue submitted:', this.issue);
    }, 1500);
  }
}

