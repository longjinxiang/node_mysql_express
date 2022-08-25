import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  comments: string

  @ManyToOne(type=>User) // 多对一用户
  @JoinColumn() // 外键
  user: User
}