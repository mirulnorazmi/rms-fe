export interface Property {
  id: string;
  name: string;
  address: string;
  type: 'Apartment' | 'House' | 'Commercial';
  totalUnits: number;
  occupiedUnits: number;
  occupancyStatus: 'Full' | 'Partial' | 'Empty';
  imageUrl?: string;
}

export interface Unit {
  id: string;
  propertyId: string;
  unitNumber: string;
  tenantId?: string;
  status: 'Occupied' | 'Vacant' | 'Maintenance';
  rentAmount: number;
}

