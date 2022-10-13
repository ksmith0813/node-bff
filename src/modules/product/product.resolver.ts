import { Args, Query, Resolver } from '@nestjs/graphql';
import { Logger } from '@nestjs/common';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
  private readonly logger = new Logger(ProductService.name);

  constructor(private readonly productService: ProductService) {}

  @Query()
  async products(@Args('category') category: string) {
    this.logger.log('product resolver called');
    return this.productService.getProducts(category);
  }

  @Query()
  async categories() {
    this.logger.log('product category resolver called');
    return this.productService.getProductCategories();
  }
}
