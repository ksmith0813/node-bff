import { Injectable } from '@nestjs/common';
import { STATUS } from '../../common/enums/common';

@Injectable()
export class HealthService {
  getHealth(): object {
    return {
      status: STATUS.healthy,
      version: '0.0.1',
    };
  }
}
