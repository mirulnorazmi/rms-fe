import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Document } from '../../models/document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private mockDocuments: Document[] = [
    {
      id: 'doc-001',
      title: 'Lease Agreement - Unit 101',
      type: 'Lease',
      version: 'v1.0',
      status: 'Active',
      createdDate: '2023-01-01',
      modifiedDate: '2023-01-01',
      url: '#',
      encryptionStatus: 'Encrypted',
      relatedEntityId: 't1',
      aiGenerated: false
    },
    {
      id: 'doc-002',
      title: 'Lease Renewal - Unit 102',
      type: 'Lease',
      version: 'v1.2',
      status: 'Draft',
      createdDate: '2023-10-20',
      modifiedDate: '2023-10-25',
      url: '#',
      encryptionStatus: 'Encrypted',
      relatedEntityId: 't2',
      aiGenerated: true
    },
    {
      id: 'doc-003',
      title: 'Eviction Notice Template',
      type: 'Notice',
      version: 'v2.0',
      status: 'Archived',
      createdDate: '2023-05-15',
      modifiedDate: '2023-06-01',
      url: '#',
      encryptionStatus: 'None',
      aiGenerated: true
    }
  ];

  constructor() {}

  getDocuments(): Observable<Document[]> {
    return of(this.mockDocuments);
  }
}

