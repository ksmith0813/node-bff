import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { handleHttpGet } from '../../common/utils';

@Injectable()
export class WeatherService {
  private readonly logger = new Logger(WeatherService.name);

  constructor(private readonly configService: ConfigService, private readonly httpService: HttpService) {}

  async getWeather(search: string) {
    const weatherUrl = this.configService.get('WEATHER_API_URL');
    const key = this.configService.get('WEATHER_KEY');
    const url = `${weatherUrl}forecast.json?q=${search}&key=${key}`;
    this.logger.log('getWeather url - ', url);
    return handleHttpGet(this.httpService, url, this.logger);
  }
}
