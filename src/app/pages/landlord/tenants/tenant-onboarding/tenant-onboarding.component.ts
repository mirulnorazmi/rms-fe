import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tenant-onboarding',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './tenant-onboarding.component.html',
  styleUrl: './tenant-onboarding.component.css'
})
export class TenantOnboardingComponent {
  step = 1;
  tenantData: any = {
    personal: { firstName: '', lastName: '', email: '', phone: '' },
    property: { propertyId: '', unitId: '', leaseStart: '', leaseEnd: '', rent: 0 },
    documents: []
  };

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  finishOnboarding() {
    console.log('Onboarding complete:', this.tenantData);
    // Submit data
  }
}

