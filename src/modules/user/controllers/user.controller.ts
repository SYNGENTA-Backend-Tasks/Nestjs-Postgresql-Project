import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import { UpdateUserDto } from '../dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createTable(@Body() userData: CreateUserDto) {
    return await this.userService.createNewUser(userData);
  }

  @Get('/')
  getAllUser() {
    return this.userService.getAllUser();
  }

  @Get('/:id')
  async getUserById(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return await this.userService.getUserById(id);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.userService.remove(id);
  }
}
