import { Args, Query, Resolver } from '@nestjs/graphql';
import { Logger } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Resolver()
export class WeatherResolver {
  private readonly logger = new Logger(WeatherService.name);

  constructor(private readonly weatherService: WeatherService) {}

  @Query()
  async weather(@Args('search') search: string) {
    this.logger.log('weather resolver called');
    return this.weatherService.getWeather(search);
  }
}
