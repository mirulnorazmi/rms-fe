import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PropertyService } from '../../../../core/services/mock/property.service';
import { Property } from '../../../../core/models/property.model';
import { PropertyFormComponent } from '../property-form/property-form.component';

@Component({
    selector: 'app-property-list',
    imports: [CommonModule, RouterLink, PropertyFormComponent],
    templateUrl: './property-list.component.html',
    styles: []
})
export class PropertyListComponent implements OnInit {
  private propertyService = inject(PropertyService);
  properties: Property[] = [];
  showAddModal = false;

  ngOnInit() {
    this.propertyService.getProperties().subscribe(data => {
      this.properties = data;
    });
  }

  getOccupancyRate(property: Property): number {
    if (property.totalUnits === 0) return 0;
    const occupied = property.units.filter(u => u.status === 'Occupied').length;
    return Math.round((occupied / property.totalUnits) * 100);
  }

  deleteProperty(id: string) {
    if (confirm('Are you sure you want to delete this property?')) {
      this.propertyService.deleteProperty(id);
    }
  }

  openAddModal() {
    this.showAddModal = true;
  }

  closeAddModal() {
    this.showAddModal = false;
  }
}

