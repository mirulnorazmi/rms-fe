import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-occupancy-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './occupancy-report.component.html',
  styleUrl: './occupancy-report.component.css'
})
export class OccupancyReportComponent {
  stats = {
    totalUnits: 50,
    occupied: 45,
    vacant: 4,
    maintenance: 1,
    occupancyRate: 90
  };

  properties = [
    { name: 'Sunset Apartments', total: 20, occupied: 19, vacant: 1, rate: 95 },
    { name: 'Downtown Condo', total: 10, occupied: 8, vacant: 2, rate: 80 },
    { name: 'Lakeside Villa', total: 5, occupied: 5, vacant: 0, rate: 100 },
    { name: 'Urban Lofts', total: 15, occupied: 13, vacant: 1, rate: 87 },
  ];
}

