import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { handleHttpGet } from '../../common/utils';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(private readonly configService: ConfigService, private readonly httpService: HttpService) {}

  async getUsers() {
    const url = `${this.configService.get('USER_API_URL')}api?results=200&page=1`;
    this.logger.log('getUsers url - ', url);
    return handleHttpGet(this.httpService, url, this.logger);
  }
}
