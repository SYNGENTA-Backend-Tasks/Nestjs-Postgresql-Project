// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { User } from 'src/User/User.entity';
// import { Address } from 'src/Address/Address.entity';
// import { CreateUserDto } from 'dto/user.dto';

// @Injectable()
// export class UserService {
//   constructor(
//     @InjectRepository(User)
//     private userRepository: Repository<User>,
//     @InjectRepository(Address)
//     private addressRepository: Repository<Address>,
//   ) {}

//   async createUser(userData: CreateUserDto): Promise<User> {
//     const { name, country, state, city } = userData;

//     const address = this.addressRepository.create({ country, state, city });
//     await this.addressRepository.save(address);

//     const user = this.userRepository.create({ name, address });
//     return this.userRepository.save(user);
//   }
// }

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../User/User.entity';
import { Address } from '../Address/Address.entity';
import { UserRepository } from 'src/Repository/user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
  ) {}

  async createUser(userData: {
    name: string;
    address: { country: string; state: string; city: string; pincode: string };
  }) {
    const { name, address } = userData;

    const newAddress = await this.addressRepository.create(address);
    await this.addressRepository.save(newAddress);

    const newUser = await this.userRepository.create({
      name,
      address: newAddress,
    });
    return this.userRepository.save(newUser);
  }
}
