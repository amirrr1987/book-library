import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BookEntity } from '../../books/entities/book.entity';

@Entity({ name: 'authors' })
export class AuthorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  firstName: string;

  @Column({ type: 'varchar', length: 255 })
  lastName: string;

  @Column()
  books: BookEntity[];
}
