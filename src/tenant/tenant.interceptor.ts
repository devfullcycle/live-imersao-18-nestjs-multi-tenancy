import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { TenantService } from './tenant.service';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TenantInterceptor implements NestInterceptor {
  constructor(
    private tenantService: TenantService,
    private prismaService: PrismaService,
  ) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const partnerUser = await this.prismaService.partnerUser.findFirst({
      where: { userId: user.id },
      include: { Partner: true },
    });

    if (!partnerUser) {
      throw new Error('User not have a partner');
    }

    this.tenantService.setTenant(partnerUser.Partner);

    return next.handle();
  }
}
