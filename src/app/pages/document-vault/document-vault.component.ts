import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-document-vault',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './document-vault.component.html',
  styleUrl: './document-vault.component.css'
})
export class DocumentVaultComponent {
  documents = [
    { name: 'Tenancy Agreement.pdf', type: 'Contract', date: '2023-10-01', size: '2.5 MB' },
    { name: 'Passport Copy.jpg', type: 'Identity', date: '2023-09-15', size: '1.2 MB' },
    { name: 'Insurance Policy.pdf', type: 'Policy', date: '2023-01-10', size: '3.0 MB' }
  ];

  onFileSelected(event: any) {
    // Handle file upload
    console.log('File selected', event.target.files[0]);
  }
}

