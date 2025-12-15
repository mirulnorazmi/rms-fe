import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-payment-overview',
    imports: [CommonModule, RouterLink],
    templateUrl: './payment-overview.component.html',
    styles: []
})
export class PaymentOverviewComponent {
  metrics = {
    totalRent: 15000,
    outstanding: 3200,
    collected: 11800,
    overdueCount: 3
  };

  latestPayments = [
    { id: 'P001', tenant: 'John Doe', unit: '101', amount: 1200, date: 'Oct 1, 2023', status: 'Paid' },
    { id: 'P002', tenant: 'Jane Smith', unit: '205', amount: 1100, date: 'Oct 1, 2023', status: 'Paid' },
    { id: 'P003', tenant: 'Mike Johnson', unit: '304', amount: 1300, date: 'Sep 28, 2023', status: 'Paid' },
  ];

  overdueList = [
    { id: 'P004', tenant: 'Alice Brown', unit: '105', amount: 1200, dueDate: 'Oct 1, 2023', daysLate: 5 },
    { id: 'P005', tenant: 'Bob White', unit: '202', amount: 1150, dueDate: 'Oct 1, 2023', daysLate: 5 },
  ];
}

