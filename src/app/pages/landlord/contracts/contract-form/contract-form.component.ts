import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contract-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './contract-form.component.html',
  styleUrl: './contract-form.component.css'
})
export class ContractFormComponent {
  contract: any = {
    tenantName: '',
    propertyId: '',
    startDate: '',
    endDate: '',
    rentAmount: 0,
    depositAmount: 0,
    terms: ''
  };

  generateTerms() {
      // Simulate Claude auto-fill
      this.contract.terms = "Standard tenancy agreement terms...\n1. Rent is due on the 1st of each month.\n2. No pets allowed without prior approval.\n3. Tenant is responsible for utilities.";
  }

  saveContract() {
    console.log('Contract saved:', this.contract);
  }
}

