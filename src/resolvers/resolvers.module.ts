import { Module } from '@nestjs/common';
import { ServicesModule } from '../services/services.module';

@Module({
  imports: [ServicesModule],
  providers: [],
  exports: [ResolversModule],
})
export class ResolversModule {}
