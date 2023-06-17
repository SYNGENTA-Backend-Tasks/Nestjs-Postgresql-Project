import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './User.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() data: Partial<User>): Promise<User> {
    return this.userService.createUser(data);
  }
}
