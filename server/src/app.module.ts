import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { GenresModule } from './genres/genres.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfig } from './config/pgConfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(pgConfig),
    AuthorsModule,
    BooksModule,
    GenresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
