import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contract-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './contract-list.component.html',
  styleUrl: './contract-list.component.css'
})
export class ContractListComponent {
  contracts = [
    { id: 1, tenant: 'Alice Smith', property: 'Sunset Apts - 101', startDate: '2023-01-01', endDate: '2023-12-31', status: 'Active' },
    { id: 2, tenant: 'Bob Jones', property: 'Sunset Apts - 102', startDate: '2023-02-15', endDate: '2024-02-14', status: 'Active' },
    { id: 3, tenant: 'Charlie Brown', property: 'Downtown Condo - 5A', startDate: '2022-01-01', endDate: '2022-12-31', status: 'Expired' },
  ];
}

