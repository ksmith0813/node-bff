import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { keys } from 'src/keys';
import { handleHttpGet } from '../../common/utils';

@Injectable()
export class WeatherService {
  private readonly logger = new Logger(WeatherService.name);

  constructor(private readonly configService: ConfigService, private readonly httpService: HttpService) {}

  async getWeather(search: string) {
    const url = `${this.configService.get('WEATHER_API_URL')}forecast.json?q=${search}&key=${keys.weatherApi}`;
    this.logger.log('getWeather url - ', url);
    return handleHttpGet(this.httpService, url, this.logger);
  }
}
