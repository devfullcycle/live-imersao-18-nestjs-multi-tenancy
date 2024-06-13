import { Injectable, Scope } from '@nestjs/common';
import { Partner } from '@prisma/client';

@Injectable({
  scope: Scope.REQUEST,
}) //shared service
export class TenantService {
  private tenant: Partner;

  setTenant(tenant: Partner) {
    this.tenant = tenant;
  }

  getTenant() {
    return this.tenant;
  }
}
