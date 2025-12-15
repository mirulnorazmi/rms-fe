import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-document-viewer',
    imports: [CommonModule, RouterLink],
    templateUrl: './document-viewer.component.html',
    styles: []
})
export class DocumentViewerComponent {
  document = {
    id: '1',
    name: 'Lease Agreement - Unit 101',
    type: 'Contract',
    size: '2.4 MB',
    uploadedBy: 'System',
    date: 'Jan 1, 2023',
    content: 'This is a placeholder for the PDF viewer.'
  };
}

