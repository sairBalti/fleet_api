import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Drivers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
    Address: string;
  
  @Column()
    Contact_Number:number;

  @Column()
    cnic: string;
}


