import { Module } from '@nestjs/common';
import { HealthResolver } from 'src/modules/health/health.resolver';
import { ServicesModule } from '../services/services.module';

@Module({
  imports: [ServicesModule],
  providers: [HealthResolver],
  exports: [ResolversModule],
})
export class ResolversModule {}
