import { Component, EventEmitter, Input, Output, OnInit, inject } from '@angular/core';

import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Unit, UnitType, UnitStatus } from '../../../../core/models/property.model';
import { PropertyService } from '../../../../core/services/mock/property.service';

@Component({
    selector: 'app-unit-form',
    imports: [ReactiveFormsModule],
    templateUrl: './unit-form.component.html',
    styles: []
})
export class UnitFormComponent implements OnInit {
  @Input() propertyId!: string;
  @Input() unit: Unit | null = null; // If provided, we are in Edit Mode
  @Output() close = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  private propertyService = inject(PropertyService);

  unitForm = this.fb.group({
    unitNumber: ['', Validators.required],
    type: ['1BHK' as UnitType, Validators.required],
    status: ['Vacant' as UnitStatus, Validators.required],
    rentAmount: [0, [Validators.required, Validators.min(0)]],
    currentTenantName: ['']
  });

  mockImages: string[] = [];

  ngOnInit() {
    if (this.unit) {
      this.unitForm.patchValue({
        unitNumber: this.unit.unitNumber,
        type: this.unit.type,
        status: this.unit.status,
        rentAmount: this.unit.rentAmount,
        currentTenantName: this.unit.currentTenantName || ''
      });
      this.mockImages = this.unit.images || [];
    }
  }

  onFileSelected(event: any) {
    // Mock file upload - just add a placeholder
    if (event.target.files.length > 0) {
      const newImage = 'https://img.daisyui.com/images/stock/photo-1564013799919-ab600027ffc6.webp';
      this.mockImages.push(newImage);
    }
  }

  removeImage(index: number) {
    this.mockImages.splice(index, 1);
  }

  onSubmit() {
    if (this.unitForm.valid) {
      const formValue = this.unitForm.value;
      const unitData = {
        ...formValue,
        images: this.mockImages
      };

      if (this.unit) {
        // Update existing unit logic would go here (Mock service needs update to support unit edit)
        console.log('Updating unit:', unitData);
      } else {
        // Create new unit
        this.propertyService.addUnit(this.propertyId, unitData as any);
      }
      this.close.emit();
    }
  }

  onCancel() {
    this.close.emit();
  }
}
