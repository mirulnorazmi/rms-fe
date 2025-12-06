import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-contract',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './my-contract.component.html',
  styleUrl: './my-contract.component.css'
})
export class MyContractComponent {
  contract = {
    id: 'CNT-2023-001',
    startDate: '2023-01-01',
    endDate: '2023-12-31',
    rent: 1200,
    deposit: 2400,
    status: 'Active',
    terms: '1. Rent is due on the 1st.\n2. Utilities included.\n3. No smoking.',
    versions: [
      { name: 'Contract v1.0 (Signed)', date: '2023-01-01', size: '2.5 MB' }
    ]
  };
}

