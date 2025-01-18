import { AuthorEntity } from '../../authors/entities/author.entity';
import { GenreEntity } from '../../genres/entities/genre.entity';
import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity({ name: 'books' })
export class BookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'timestamp' })
  publishedDate: Date;

  @Column({ type: 'boolean', default: true })
  available: boolean;

  @ManyToMany(() => GenreEntity, { eager: true })
  @JoinTable({ name: 'books_genres' })
  genres: GenreEntity[];

  @ManyToMany(() => AuthorEntity, { eager: true })
  @JoinTable({ name: 'books_authors' })
  authors: AuthorEntity[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
