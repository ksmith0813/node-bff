import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HealthResolver {
  @Query('health')
  async health() {
    return 'Healthy';
  }

  @Query('version')
  async version() {
    return '0.0.1';
  }
}
