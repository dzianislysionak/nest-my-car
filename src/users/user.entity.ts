import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log(`Insert a user with id: ${this.id}`);
  }

  @AfterUpdate()
  logUpdate() {
    console.log(`Update a user with id: ${this.id}`);
  }

  @AfterRemove()
  logRemove() {
    console.log(`Remove a user with id: ${this.id}`);
  }
}
