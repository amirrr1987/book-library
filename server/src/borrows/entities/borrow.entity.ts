import { BookEntity } from '../../books/entities/book.entity';
import { UserEntity } from '../../users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'borrows' })
export class BorrowEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.id)
  user: UserEntity;

  @ManyToOne(() => BookEntity, (book) => book.id)
  book: BookEntity;

  @Column()
  borrowDate: Date;

  @Column({ nullable: true })
  returnDate: Date;
}
