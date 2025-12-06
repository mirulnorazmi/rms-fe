export interface Document {
  id: string;
  title: string;
  type: 'Lease' | 'Addendum' | 'Notice' | 'Invoice' | 'Other';
  version: string; // e.g., "v1.0"
  status: 'Draft' | 'Active' | 'Archived' | 'Signed';
  createdDate: string;
  modifiedDate: string;
  url: string;
  encryptionStatus: 'Encrypted' | 'None';
  relatedEntityId?: string; // TenantID or PropertyID
  aiGenerated: boolean;
}

