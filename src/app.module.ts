import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { PartnersModule } from './partners/partners.module';
import { EventsModule } from './events/events.module';
import { TenantModule } from './tenant/tenant.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    PartnersModule,
    EventsModule,
    TenantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//MVC
//container de injeção de dependência
