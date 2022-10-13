import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';
import { ENDPOINTS } from '../../common/enums/common';

@Controller(ENDPOINTS.health)
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  getHealth(): object {
    return this.healthService.getHealth();
  }
}
