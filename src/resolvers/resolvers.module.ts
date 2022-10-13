import { Module } from '@nestjs/common';
import { BreweryResolver } from 'src/modules/brewery/brewery.resolver';
import { HealthResolver } from 'src/modules/health/health.resolver';
import { ServicesModule } from '../services/services.module';

@Module({
  imports: [ServicesModule],
  providers: [HealthResolver, BreweryResolver],
  exports: [ResolversModule],
})
export class ResolversModule {}
