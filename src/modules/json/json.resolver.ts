import { Query, Resolver } from '@nestjs/graphql';
import { Logger } from '@nestjs/common';
import { JsonService } from './json.service';

@Resolver()
export class JsonResolver {
  private readonly logger = new Logger(JsonService.name);

  constructor(private readonly jsonService: JsonService) {}

  @Query()
  async todos() {
    this.logger.log('todo resolver called');
    return this.jsonService.getTodos();
  }
}
