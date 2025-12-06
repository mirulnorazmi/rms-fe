export type TicketPriority = 'High' | 'Medium' | 'Low';
export type TicketStatus = 'Open' | 'In Progress' | 'Resolved' | 'Closed';

export interface MaintenanceTicket {
  id: string;
  title: string;
  description: string;
  priority: TicketPriority;
  status: TicketStatus;
  propertyId: string;
  unitId: string;
  reportedBy: string; // Tenant ID
  reportedDate: string;
  assignedTo?: string; // Contractor/Technician ID
  aiSummary?: string; // AI-generated summary of the issue
  images?: string[];
}

