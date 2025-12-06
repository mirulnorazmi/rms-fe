import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ai-assistant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ai-assistant.component.html',
  styles: []
})
export class AIAssistantComponent {
  isOpen = false;
  query = '';
  messages: { type: 'user' | 'ai', text: string }[] = [
    { type: 'ai', text: 'Hello! I am your AI Property Assistant. How can I help you today?' }
  ];

  toggleAssistant() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (!this.query.trim()) return;

    // Add user message
    this.messages.push({ type: 'user', text: this.query });
    const userQuery = this.query;
    this.query = '';

    // Simulate AI response based on keywords
    setTimeout(() => {
      let response = "I'm not sure how to help with that yet.";
      
      if (userQuery.toLowerCase().includes('risk')) {
        response = "Based on payment history and credit utilization, Tenant John Doe has a risk score of 15/100 (Low Risk).";
      } else if (userQuery.toLowerCase().includes('eviction')) {
        response = "I can help draft an eviction notice. Please provide the tenant's name and the reason for eviction.";
      } else if (userQuery.toLowerCase().includes('lease') || userQuery.toLowerCase().includes('summarize')) {
        response = "The lease for Unit 101 expires in 2 months. It includes a standard pet clause and a late fee of $50 after the 5th of the month.";
      }

      this.messages.push({ type: 'ai', text: response });
    }, 1000);
  }

  usePrompt(prompt: string) {
    this.query = prompt;
    this.sendMessage();
  }
}

