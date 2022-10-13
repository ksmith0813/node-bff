import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { handleHttpGet } from '../../common/utils';

@Injectable()
export class BreweryService {
  private readonly logger = new Logger(BreweryService.name);

  constructor(private readonly configService: ConfigService, private readonly httpService: HttpService) {}

  async getBreweries() {
    const url = `${this.configService.get('BREWERY_API_URL')}breweries?per_page=100`;
    this.logger.log('getBreweries url - ', url);
    return handleHttpGet(this.httpService, url, this.logger);
  }
}
