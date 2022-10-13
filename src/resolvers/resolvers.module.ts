import { Module } from '@nestjs/common';
import { BreweryResolver } from 'src/modules/brewery/brewery.resolver';
import { HealthResolver } from 'src/modules/health/health.resolver';
import { JsonResolver } from 'src/modules/json/json.resolver';
import { MovieResolver } from 'src/modules/movie/movie.resolver';
import { ServicesModule } from '../services/services.module';

@Module({
  imports: [ServicesModule],
  providers: [HealthResolver, BreweryResolver, JsonResolver, MovieResolver],
  exports: [ResolversModule],
})
export class ResolversModule {}
