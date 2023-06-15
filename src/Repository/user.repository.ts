import { EntityRepository, Repository } from 'typeorm';
import { User } from '../User/User.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  // Implement custom methods for user operations if needed

  async findUsersByName(name: string): Promise<User[]> {
    return this.find({ where: { name } });
  }

  async createUser(name: string): Promise<User> {
    const user = this.create({ name });
    return this.save(user);
  }

  async updateUser(id: number, name: string): Promise<User | undefined> {
    await this.update(id, { name });
    return this.findOne(id);
  }

  async deleteUser(id: number): Promise<User | undefined> {
    const user = await this.findOne(id);
    if (user) {
      await this.delete(id);
    }
    return user;
  }
}
