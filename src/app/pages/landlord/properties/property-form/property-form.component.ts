import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PropertyService } from '../../../../core/services/mock/property.service';
import { Property, PropertyType } from '../../../../core/models/property.model';

@Component({
    selector: 'app-property-form',
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './property-form.component.html',
    styles: []
})
export class PropertyFormComponent implements OnInit {
  @Input() property: Property | null = null; // If provided, Edit Mode
  @Output() close = new EventEmitter<void>();
  
  private fb = inject(FormBuilder);
  private propertyService = inject(PropertyService);

  propertyForm = this.fb.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    type: ['Apartment' as PropertyType, Validators.required],
    imageUrl: ['https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'] // Default mock image
  });

  ngOnInit() {
    if (this.property) {
      this.propertyForm.patchValue({
        name: this.property.name,
        address: this.property.address,
        type: this.property.type,
        imageUrl: this.property.imageUrl
      });
    }
  }

  onSubmit() {
    if (this.propertyForm.valid) {
      const formData = this.propertyForm.value;
      
      if (this.property) {
        this.propertyService.updateProperty(this.property.id, formData as any);
      } else {
        this.propertyService.addProperty(formData as any);
      }
      
      this.close.emit();
    }
  }

  onCancel() {
    this.close.emit();
  }
}
