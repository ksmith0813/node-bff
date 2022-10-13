import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { BreweryService } from 'src/modules/brewery/brewery.service';
import { JsonService } from 'src/modules/json/json.service';
import { MovieService } from 'src/modules/movie/movie.service';

@Module({
  imports: [HttpModule],
  providers: [BreweryService, JsonService, MovieService],
  exports: [BreweryService, JsonService, MovieService],
})
export class ServicesModule {}
