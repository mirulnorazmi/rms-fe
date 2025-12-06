import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PropertyService } from '../../../../core/services/mock/property.service';
import { Property, Unit } from '../../../../core/models/property.model';
import { PropertyFormComponent } from '../property-form/property-form.component';
import { UnitFormComponent } from '../unit-form/unit-form.component';

@Component({
  selector: 'app-property-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, PropertyFormComponent, UnitFormComponent],
  templateUrl: './property-detail.component.html',
  styles: []
})
export class PropertyDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private propertyService = inject(PropertyService);
  property: Property | undefined;

  showEditPropertyModal = false;
  showUnitModal = false;
  selectedUnit: Unit | null = null;

  ngOnInit() {
    this.loadProperty();
  }

  loadProperty() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.propertyService.getPropertyById(id).subscribe(data => {
        this.property = data;
      });
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Occupied': return 'badge-success';
      case 'Vacant': return 'badge-ghost';
      case 'Maintenance': return 'badge-warning';
      default: return 'badge-ghost';
    }
  }

  // Property Actions
  openEditPropertyModal() {
    this.showEditPropertyModal = true;
  }

  closeEditPropertyModal() {
    this.showEditPropertyModal = false;
    this.loadProperty(); // Reload to see changes
  }

  // Unit Actions
  openAddUnitModal() {
    this.selectedUnit = null;
    this.showUnitModal = true;
  }

  openEditUnitModal(unit: Unit) {
    this.selectedUnit = unit;
    this.showUnitModal = true;
  }

  closeUnitModal() {
    this.showUnitModal = false;
    this.selectedUnit = null;
    this.loadProperty(); // Reload to see changes
  }

  deleteUnit(unit: Unit) {
    if (confirm(`Are you sure you want to delete Unit ${unit.unitNumber}?`)) {
      console.log('Deleting unit:', unit.id);
      if (this.property) {
        this.property.units = this.property.units.filter((u: Unit) => u.id !== unit.id);
        this.property.totalUnits--;
      }
    }
  }
}
