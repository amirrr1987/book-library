import { BookEntity } from '../../books/entities/book.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from 'typeorm';

@Entity({ name: 'genres' }) // Specifies the table name in the database
export class GenreEntity {
  @PrimaryGeneratedColumn()
  id: number; // Auto-generated primary key

  @Column({ type: 'varchar', length: 100 })
  label: string; // Genre label with a max length of 100 characters, must be unique

  @Column({ type: 'varchar', length: 100, unique: true })
  value: string; // Internal value with a max length of 100 characters, must be unique

  @ManyToMany(() => BookEntity, (book) => book.id) // Many-to-many relationship with BookEntity
  books: BookEntity[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date; // Auto-populated timestamp for creation

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date; // Auto-updated timestamp for modifications
}
