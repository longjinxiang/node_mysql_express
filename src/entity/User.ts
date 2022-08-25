import { Entity,PrimaryGeneratedColumn,Column, OneToMany } from 'typeorm'
import { Comment } from './Comment';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nick: string;
  @Column()
  salary: number;
  @OneToMany(type=>Comment, comment=>comment.user)
  comments: Comment[]
}

