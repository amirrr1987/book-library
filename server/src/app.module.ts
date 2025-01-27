import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfig } from './config/pgConfig';
import { UsersModule } from './users/users.module';
import { BorrowsModule } from './borrows/borrows.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(pgConfig),
    AuthorsModule,
    BooksModule,
    UsersModule,
    BorrowsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
