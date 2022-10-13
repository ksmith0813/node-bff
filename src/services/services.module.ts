import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { BreweryService } from 'src/modules/brewery/brewery.service';
import { JsonService } from 'src/modules/json/json.service';

@Module({
  imports: [HttpModule],
  providers: [BreweryService, JsonService],
  exports: [BreweryService, JsonService],
})
export class ServicesModule {}
