import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class Books {
  @PrimaryGeneratedColumn()
  @Index()
  id: number;

  @Column()
  title: string;

  @Column()
  @Index()
  author: string;

  @Column({ unique: true })
  isbn: string;

  @Column()
  price: number;
}