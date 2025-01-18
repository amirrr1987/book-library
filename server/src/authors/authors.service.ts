import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorEntity } from './entities/author.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(AuthorEntity)
    private readonly authorRepository: Repository<AuthorEntity>,
  ) {}
  async create(dto: CreateAuthorDto) {
    const author = this.authorRepository.create(dto);
    return await this.authorRepository.save(author);
  }

  async findAll() {
    return await this.authorRepository.find();
  }

  async findOne(id: number) {
    return await this.authorRepository.findOneBy({ id });
  }

  async update(id: number, dto: UpdateAuthorDto) {
    return await this.authorRepository.update(id, dto);
  }

  async remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
