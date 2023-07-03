import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AddressController } from './controllers/address.controller';
import { AddressService } from './services/address.service';
import { Address } from './entities/address.entity';

@Module({
  controllers: [UserController, AddressController],
  imports: [TypeOrmModule.forFeature([User, Address])],
  providers: [UserService, AddressService],
  exports: [UserService, AddressService],
})
export class UserModule {}
