import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BookEntity } from '../../books/entities/book.entity';

@Entity({ name: 'authors' })
export class AuthorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  firstName: string;

  @Column({ type: 'varchar', length: 255 })
  lastName: string;

  @ManyToMany(() => BookEntity, (book) => book.id)
  books: BookEntity[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date; // Auto-populated timestamp for creation

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date; // Auto-updated timestamp for modifications
}
