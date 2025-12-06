export interface Tenant {
  id: string;
  name: string;
  email: string;
  phone: string;
  unitId: string;
  propertyId: string;
  onboardingStatus: 'Pending' | 'Active' | 'Completed';
  leaseStart: string; // ISO Date string
  leaseEnd: string;   // ISO Date string
  riskScore: number;  // 0-100, higher is riskier
  paymentStatus: 'On-time' | 'Late' | 'Pending';
  avatarUrl?: string;
}

