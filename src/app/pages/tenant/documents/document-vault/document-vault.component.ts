import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';

interface DocFile {
  id: string;
  name: string;
  type: 'pdf' | 'img' | 'doc';
  category: 'Contract' | 'Receipt' | 'ID' | 'Other';
  date: string;
  size: string;
}

@Component({
    selector: 'app-document-vault',
    imports: [RouterLink],
    templateUrl: './document-vault.component.html',
    styles: []
})
export class DocumentVaultComponent {
  files: DocFile[] = [
    { id: '1', name: 'Lease_Agreement_2023.pdf', type: 'pdf', category: 'Contract', date: 'Jan 1, 2023', size: '2.4 MB' },
    { id: '2', name: 'Rent_Receipt_Oct.pdf', type: 'pdf', category: 'Receipt', date: 'Oct 1, 2023', size: '150 KB' },
    { id: '3', name: 'Passport_Scan.jpg', type: 'img', category: 'ID', date: 'Dec 15, 2022', size: '3.2 MB' },
    { id: '4', name: 'Move_In_Checklist.docx', type: 'doc', category: 'Other', date: 'Jan 2, 2023', size: '500 KB' }
  ];

  stats = {
    totalFiles: 4,
    storageUsed: '6.25 MB',
    limit: '100 MB'
  };

  getFileIcon(type: string) {
    switch(type) {
      case 'pdf': return '📄';
      case 'img': return '🖼️';
      case 'doc': return '📝';
      default: return '📎';
    }
  }
}

