import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { BreweryService } from 'src/modules/brewery/brewery.service';
import { JsonService } from 'src/modules/json/json.service';
import { MovieService } from 'src/modules/movie/movie.service';
import { ProductService } from 'src/modules/product/product.service';
import { UserService } from 'src/modules/user/user.service';

@Module({
  imports: [HttpModule],
  providers: [BreweryService, JsonService, MovieService, ProductService, UserService],
  exports: [BreweryService, JsonService, MovieService, ProductService, UserService],
})
export class ServicesModule {}
