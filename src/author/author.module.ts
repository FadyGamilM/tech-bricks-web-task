import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorEntity } from './models/author.entity';
import { AuthorController } from './controllers/author.controller';
import { AuthorService } from './services/author.service';

@Module({
  // register the Author Entity
  imports: [TypeOrmModule.forFeature([AuthorEntity])],
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AuthorModule {}
