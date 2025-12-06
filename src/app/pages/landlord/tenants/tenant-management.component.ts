import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantService } from '../../../core/services/mock/tenant.service';
import { Tenant } from '../../../core/models/tenant.model';

@Component({
  selector: 'app-tenant-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tenant-management.component.html',
  styles: []
})
export class TenantManagementComponent implements OnInit {
  private tenantService = inject(TenantService);
  tenants: Tenant[] = [];

  ngOnInit() {
    this.tenantService.getTenants().subscribe(data => {
      this.tenants = data;
    });
  }
}
