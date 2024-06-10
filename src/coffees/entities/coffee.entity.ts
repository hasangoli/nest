import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @JoinTable() // Specifies the owner side of relationship
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToMany((type: never) => Flavor, (flavor) => flavor.coffees, {
    cascade: true, // automatically insert flavors into the database
  })
  flavors: Flavor[];
}
