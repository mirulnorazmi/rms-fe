import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-messaging',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './messaging.component.html',
  styleUrl: './messaging.component.css'
})
export class MessagingComponent {
  conversations = [
    { id: 1, name: 'Alice (Tenant)', lastMessage: 'Can I pay rent on Monday?', time: '10:30 AM', unread: true, avatar: 'A' },
    { id: 2, name: 'Bob (Landlord)', lastMessage: 'Lease agreement attached.', time: 'Yesterday', unread: false, avatar: 'B' },
    { id: 3, name: 'Maintenance Support', lastMessage: 'Ticket #123 resolved.', time: 'Mon', unread: false, avatar: 'M' }
  ];

  selectedConversation: any = null;
  newMessage = '';
  
  messages = [
      { id: 1, sender: 'me', text: 'Hi Alice, how are you?', time: '10:00 AM' },
      { id: 2, sender: 'Alice (Tenant)', text: 'I am good. Can I pay rent on Monday?', time: '10:30 AM' }
  ];

  selectConversation(conv: any) {
    this.selectedConversation = conv;
    // Load messages for this conversation
  }

  sendMessage() {
      if (this.newMessage.trim()) {
          this.messages.push({
              id: this.messages.length + 1,
              sender: 'me',
              text: this.newMessage,
              time: 'Just now'
          });
          this.newMessage = '';
      }
  }
}

