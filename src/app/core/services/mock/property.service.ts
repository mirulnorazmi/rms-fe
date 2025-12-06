import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Property, Unit } from '../../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private mockProperties: Property[] = [
    {
      id: 'p1',
      name: 'Sunrise Apartments',
      address: '123 Market St, San Francisco, CA',
      type: 'Apartment',
      imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
      totalUnits: 12,
      units: [
        { id: 'u101', unitNumber: '101', type: '1BHK', status: 'Occupied', rentAmount: 1800, currentTenantId: 't1', currentTenantName: 'John Doe' },
        { id: 'u102', unitNumber: '102', type: '1BHK', status: 'Vacant', rentAmount: 1800 },
        { id: 'u103', unitNumber: '103', type: 'Studio', status: 'Maintenance', rentAmount: 1400 },
      ]
    },
    {
      id: 'p2',
      name: 'Downtown Loft',
      address: '450 Broadway, New York, NY',
      type: 'Apartment',
      imageUrl: 'https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp',
      totalUnits: 5,
      units: [
        { id: 'u201', unitNumber: '2A', type: '2BHK', status: 'Occupied', rentAmount: 3200, currentTenantId: 't3', currentTenantName: 'Alice Wonder' },
        { id: 'u202', unitNumber: '2B', type: '2BHK', status: 'Occupied', rentAmount: 3200 },
      ]
    },
    {
      id: 'p3',
      name: 'Green Valley House',
      address: '88 Suburban Ln, Austin, TX',
      type: 'House',
      imageUrl: 'https://img.daisyui.com/images/stock/photo-1564013799919-ab600027ffc6.webp',
      totalUnits: 1,
      units: [
        { id: 'u301', unitNumber: 'Main', type: '3BHK', status: 'Vacant', rentAmount: 4500 }
      ]
    }
  ];

  private propertiesSubject = new BehaviorSubject<Property[]>(this.mockProperties);
  properties$ = this.propertiesSubject.asObservable();

  constructor() {}

  getProperties(): Observable<Property[]> {
    return this.properties$;
  }

  getPropertyById(id: string): Observable<Property | undefined> {
    const property = this.propertiesSubject.value.find(p => p.id === id);
    return of(property);
  }

  addProperty(property: Omit<Property, 'id' | 'units'>) {
    const newProperty: Property = {
      ...property,
      id: this.generateId(),
      totalUnits: 0,
      units: []
    };
    const currentProps = this.propertiesSubject.value;
    this.propertiesSubject.next([...currentProps, newProperty]);
  }

  updateProperty(id: string, updatedData: Partial<Property>) {
    const currentProps = this.propertiesSubject.value;
    const index = currentProps.findIndex(p => p.id === id);
    if (index !== -1) {
      const updatedProps = [...currentProps];
      updatedProps[index] = { ...updatedProps[index], ...updatedData };
      this.propertiesSubject.next(updatedProps);
    }
  }

  deleteProperty(id: string) {
    const currentProps = this.propertiesSubject.value;
    this.propertiesSubject.next(currentProps.filter(p => p.id !== id));
  }

  // Unit Management Mock
  addUnit(propertyId: string, unit: Omit<Unit, 'id'>) {
    const currentProps = this.propertiesSubject.value;
    const propertyIndex = currentProps.findIndex(p => p.id === propertyId);
    if (propertyIndex !== -1) {
      const newUnit: Unit = { ...unit, id: this.generateId() };
      const updatedProperty = {
        ...currentProps[propertyIndex],
        units: [...currentProps[propertyIndex].units, newUnit],
        totalUnits: currentProps[propertyIndex].totalUnits + 1
      };
      const updatedProps = [...currentProps];
      updatedProps[propertyIndex] = updatedProperty;
      this.propertiesSubject.next(updatedProps);
    }
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}

