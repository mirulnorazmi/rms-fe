import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-document-list',
    imports: [CommonModule, RouterLink, FormsModule],
    templateUrl: './document-list.component.html',
    styles: []
})
export class DocumentListComponent {
  documents = [
    { id: '1', name: 'Lease Agreement - Unit 101', type: 'Contract', property: 'Sunset Apartments', tenant: 'John Doe', date: 'Jan 1, 2023', size: '2.4 MB' },
    { id: '2', name: 'Property Deed', type: 'Property', property: 'Sunset Apartments', tenant: '-', date: 'Dec 15, 2020', size: '5.1 MB' },
    { id: '3', name: 'Maintenance Invoice #402', type: 'Invoice', property: 'Downtown Loft', tenant: '-', date: 'Oct 5, 2023', size: '150 KB' },
    { id: '4', name: 'Tenant ID - Jane Smith', type: 'Tenant', property: 'Downtown Loft', tenant: 'Jane Smith', date: 'Sep 1, 2023', size: '3.2 MB' },
  ];

  filters = {
    property: '',
    type: ''
  };

  uploadFile() {
    // Upload logic
    console.log('Uploading file...');
  }
}

