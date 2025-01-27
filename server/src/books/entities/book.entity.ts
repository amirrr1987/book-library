import { AuthorEntity } from '../../authors/entities/author.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BorrowEntity } from '../../borrows/entities/borrow.entity';

@Entity({ name: 'books' })
export class BookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'timestamp' })
  publishedDate: Date;

  @Column({ type: 'boolean', default: true })
  isAvailable: boolean;

  @ManyToMany(() => AuthorEntity, (author) => author.id, { eager: true })
  @JoinTable({ name: 'books_authors' })
  authors: AuthorEntity[];

  @ManyToMany(() => BorrowEntity, (borrow) => borrow.id, { eager: true })
  @JoinTable({ name: 'books_borrows' })
  borrows: BorrowEntity[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
