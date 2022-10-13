import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { handleHttpGet } from '../../common/utils';

@Injectable()
export class JsonService {
  private readonly logger = new Logger(JsonService.name);

  constructor(private readonly configService: ConfigService, private readonly httpService: HttpService) {}

  async getTodos() {
    const url = `${this.configService.get('JSON_API_URL')}todos`;
    this.logger.log('getTodos url - ', url);
    return handleHttpGet(this.httpService, url, this.logger);
  }
}
