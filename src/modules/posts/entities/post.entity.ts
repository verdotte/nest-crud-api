import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ nullable: false, type: 'varchar' })
  title: string;

  @Column({ nullable: false, type: 'text' })
  description: string;

  @Column({ nullable: false, type: 'bool', default: true })
  active: boolean;

  @Column({ nullable: true, type: 'varchar' })
  imageUrl: string;

  @CreateDateColumn()
  createdAt: Date | string;

  @UpdateDateColumn()
  updatedAt: Date | string;
}
