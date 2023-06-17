import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './User.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Address } from 'src/address/Address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Address])],
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
