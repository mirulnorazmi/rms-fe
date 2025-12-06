import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contract-master',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './contract-master.component.html',
  styleUrl: './contract-master.component.css'
})
export class ContractMasterComponent {
  contracts = [
    { id: 'CNT-1001', tenant: 'Alice Smith', landlord: 'Jane Smith', property: 'Sunset Apts - 101', startDate: '2023-01-01', endDate: '2023-12-31', status: 'Active' },
    { id: 'CNT-1002', tenant: 'Bob Jones', landlord: 'Jane Smith', property: 'Sunset Apts - 102', startDate: '2023-02-01', endDate: '2024-01-31', status: 'Active' },
    { id: 'CNT-0999', tenant: 'Old Tenant', landlord: 'Tom Wilson', property: 'Lakeside Villa', startDate: '2022-01-01', endDate: '2022-12-31', status: 'Expired' }
  ];
}

