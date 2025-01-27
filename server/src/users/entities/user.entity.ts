import { BorrowEntity } from 'src/borrows/entities/borrow.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @OneToMany(() => BorrowEntity, (borrow) => borrow.id)
  borrows: BorrowEntity[];
}
