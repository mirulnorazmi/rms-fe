import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contract-versions',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './contract-versions.component.html',
  styleUrl: './contract-versions.component.css'
})
export class ContractVersionsComponent {
  contractId = 'CNT-1001';
  versions = [
    { version: 'v1.2', date: '2023-06-15', modifiedBy: 'Jane Smith (Landlord)', change: 'Rent Adjustment' },
    { version: 'v1.1', date: '2023-01-05', modifiedBy: 'System Admin', change: 'Typos Correction' },
    { version: 'v1.0', date: '2023-01-01', modifiedBy: 'Jane Smith (Landlord)', change: 'Original Contract' },
  ];
}

