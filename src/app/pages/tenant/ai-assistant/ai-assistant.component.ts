import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ai-assistant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ai-assistant.component.html',
  styleUrl: './ai-assistant.component.css'
})
export class AiAssistantComponent {
  messages = [
    { sender: 'ai', text: 'Hello! I am your rental assistant. How can I help you today?', time: 'Just now' }
  ];
  userInput = '';
  isTyping = false;

  sendMessage() {
    if (this.userInput.trim()) {
      // User message
      this.messages.push({ sender: 'me', text: this.userInput, time: 'Just now' });
      const input = this.userInput;
      this.userInput = '';
      
      // Simulate AI response
      this.isTyping = true;
      setTimeout(() => {
        this.isTyping = false;
        let reply = "I can help with that. Please check the dashboard for more details.";
        
        if (input.toLowerCase().includes('rent')) {
          reply = "Your rent of $1200 is due on Nov 1st. You can pay securely in the Payments section.";
        } else if (input.toLowerCase().includes('maintenance') || input.toLowerCase().includes('fix')) {
          reply = "You can report maintenance issues under 'Maintenance' > 'Report Issue'. Would you like me to take you there?";
        }

        this.messages.push({ sender: 'ai', text: reply, time: 'Just now' });
      }, 1500);
    }
  }
}

