export type PropertyType = 'Apartment' | 'House' | 'Commercial';
export type UnitType = 'Studio' | '1BHK' | '2BHK' | '3BHK' | 'Penthouse' | 'Office';
export type UnitStatus = 'Occupied' | 'Vacant' | 'Maintenance';

export interface Unit {
  id: string;
  unitNumber: string;
  type: UnitType;
  status: UnitStatus;
  rentAmount: number;
  currentTenantId?: string;
  currentTenantName?: string; // Helper for display
  images?: string[]; // URLs of unit images
}

export interface Property {
  id: string;
  name: string;
  address: string;
  type: PropertyType;
  imageUrl: string;
  totalUnits: number;
  units: Unit[];
}
