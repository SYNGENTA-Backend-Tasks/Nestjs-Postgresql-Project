import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'color' })
export class Color {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
