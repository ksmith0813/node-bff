import { Query, Resolver } from '@nestjs/graphql';
import { Logger } from '@nestjs/common';
import { BreweryService } from './brewery.service';

@Resolver()
export class BreweryResolver {
  private readonly logger = new Logger(BreweryService.name);

  constructor(private readonly breweryService: BreweryService) {}

  @Query()
  async breweries() {
    this.logger.log('brewery resolver called');
    return this.breweryService.getBreweries();
  }
}
