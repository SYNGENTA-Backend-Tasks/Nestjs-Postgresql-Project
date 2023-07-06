import { EntityRepository, Repository } from 'typeorm';
import { Payment } from '../entities/payment.entity';

@EntityRepository(Payment)
export class UserRepository extends Repository<Payment> {}
