import { Query, Resolver } from '@nestjs/graphql';
import { Logger } from '@nestjs/common';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  private readonly logger = new Logger(UserService.name);

  constructor(private readonly userService: UserService) {}

  @Query()
  async users() {
    this.logger.log('user resolver called');
    return this.userService.getUsers();
  }
}
