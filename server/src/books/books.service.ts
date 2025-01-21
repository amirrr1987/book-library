import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Repository } from 'typeorm';
import { BookEntity } from './entities/book.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
  ) {}
  async create(dto: CreateBookDto) {
    console.log('🚀 ~ BooksService ~ create ~ dto:', dto);
    const book = this.bookRepository.create();
    return await this.bookRepository.save(book);
  }

  async findAll() {
    return await this.bookRepository.find();
  }

  async findOne(id: number) {
    return await this.bookRepository.findOneBy({ id });
  }

  async update(id: number, dto: UpdateBookDto) {
    console.log('🚀 ~ BooksService ~ update ~ dto:', dto);
    return await this.bookRepository.update(id, {});
  }

  async remove(id: number) {
    return await this.bookRepository.delete(id);
  }
}
