import { Module } from '@nestjs/common';
import { BookService } from './services/book.service';
import { BookController } from './controllers/book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './models/book.entity';

@Module({
  // register the Author Entity
  imports: [TypeOrmModule.forFeature([BookEntity])],
  providers: [BookService],
  controllers: [BookController],
})
export class BookModule {}
