import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { BreweryService } from 'src/modules/brewery/brewery.service';

@Module({
  imports: [HttpModule],
  providers: [BreweryService],
  exports: [BreweryService],
})
export class ServicesModule {}
