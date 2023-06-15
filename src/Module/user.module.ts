import { Module } from '@nestjs/common';
import { UserController } from 'src/Controller/user.controller';
import { UserService } from 'src/Service/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
