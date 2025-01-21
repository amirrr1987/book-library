import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { GenreEntity } from './entities/genre.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GenresService {
  constructor(
    @InjectRepository(GenreEntity)
    private readonly genreRepository: Repository<GenreEntity>,
  ) {}
  async create(dto: CreateGenreDto) {
    console.log('🚀 ~ GenresService ~ create ~ dto:', dto);
    const genre = this.genreRepository.create();
    return await this.genreRepository.save(genre);
  }

  async findAll() {
    return await this.genreRepository.find();
  }

  async findOne(id: number) {
    return await this.genreRepository.findOneBy({ id });
  }

  async update(id: number, dto: UpdateGenreDto) {
    console.log('🚀 ~ GenresService ~ update ~ dto:', dto);
    return await this.genreRepository.update(id, {});
  }

  async remove(id: number) {
    return await this.genreRepository.delete(id);
  }
}
