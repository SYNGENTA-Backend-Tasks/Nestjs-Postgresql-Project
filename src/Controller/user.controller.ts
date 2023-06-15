// import { Controller, Post, Body } from '@nestjs/common';
// import { UserService } from 'src/Service/user.service';
// import { CreateUserDto } from 'dto/user.dto';

// @Controller('users')
// export class UserController {
//   constructor(private readonly userService: UserService) {}
//   @Post()
//   async createUser(@Body() userData: CreateUserDto) {
//     return this.userService.createUser(userData);
//   }
// }

import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from 'src/Service/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body()
    userData: {
      name: string;
      address: {
        country: string;
        state: string;
        city: string;
        pincode: string;
      };
    },
  ) {
    return this.userService.createUser(userData);
  }
}
