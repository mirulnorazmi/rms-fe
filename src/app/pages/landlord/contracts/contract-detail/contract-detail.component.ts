import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contract-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './contract-detail.component.html',
  styleUrl: './contract-detail.component.css'
})
export class ContractDetailComponent {
  contract = {
    id: 'CNT-2023-001',
    status: 'Active',
    tenant: 'Alice Smith',
    property: 'Sunset Apartments - Unit 101',
    startDate: '2023-01-01',
    endDate: '2023-12-31',
    rent: 1200,
    deposit: 2400,
    terms: 'Standard tenancy agreement terms...\n1. Rent is due on the 1st of each month.\n2. No pets allowed without prior approval.\n3. Tenant is responsible for utilities.',
    versions: [
      { version: 'v1.0', date: '2023-01-01', type: 'Original' }
    ]
  };
}

