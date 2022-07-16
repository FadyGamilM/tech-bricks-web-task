import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModule } from './author/author.module';
import * as dotenv from 'dotenv';
import { AuthorEntity } from './author/models/author.entity';
import { BookModule } from './book/book.module';
import { BookEntity } from './book/models/book.entity';

//! utiize the .env variables
dotenv.config();
@Module({
  imports: [
    // register our database orm
    TypeOrmModule.forRoot({
      type: 'postgres',
      // host: process.env.DB_HOST,
      // port: parseInt(<string>process.env.DB_PORT),
      // username: process.env.DB_USER,
      // password: process.env.DB_PASSWORD,
      // database: process.env.DB_DB,
      url: process.env.DATABASE_URL,
      // register our entities
      // entities: [AuthorEntity, BookEntity],
      synchronize: true, // don't push it as it in the production
      ssl: { rejectUnauthorized: false },
      autoLoadEntities: true,
    }),
    AuthorModule,
    BookModule,
  ],
  providers: [AppService],
})
export class AppModule {}
