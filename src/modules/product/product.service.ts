import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { handleHttpGet } from '../../common/utils';

@Injectable()
export class ProductService {
  private readonly logger = new Logger(ProductService.name);

  constructor(private readonly configService: ConfigService, private readonly httpService: HttpService) {}

  async getProducts(category: string) {
    const url = `${this.configService.get('PRODUCT_API_URL')}products${category ? `/category/${category}` : ''}`;
    this.logger.log('getProducts url - ', url);
    return handleHttpGet(this.httpService, url, this.logger);
  }

  async getProductCategories() {
    const url = `${this.configService.get('PRODUCT_API_URL')}products/categories`;
    this.logger.log('getProductCategories url - ', url);
    return handleHttpGet(this.httpService, url, this.logger);
  }
}
