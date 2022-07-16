import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { AuthorEntity } from '../models/author.entity';
@Injectable()
export class AuthorService {
  // inject the author repository
  // service is the only responsible for dealing with DB_Context
  constructor(
    @InjectRepository(AuthorEntity)
    private authorRepo: Repository<AuthorEntity>,
  ) {}
  /* --------------------------- Logic Documentation -------------------------- */
  // @ Description:     Get all authors
  // @ EndPoint:        /author
  // @ Method:          GET
  getAllAuthors(): Promise<AuthorEntity[]> {
    return this.authorRepo.find();
  }
  /* -------------------------------------------------------------------------- */

  /* --------------------------- Logic Documentation -------------------------- */
  // @ Description:     Get an author by id and retrieve all his/her books
  // @ EndPoint:        /author/:id/books
  // @ Method:          GET
  /* -------------------------------------------------------------------------- */
  getAuthorAndHisBooks(authorID: number): Promise<AuthorEntity> {
    // =====> Logic.1
    // const result = {};
    // const author = this.authorRepo.findOne({ where: { id: authorID } });
    // result['author'] = author;
    // const authorBooks = author.then((author) => author.books);
    // result['books'] = authorBooks;
    // return result;

    // =====> Logic.2
    return this.authorRepo.findOne({
      where: {
        id: authorID,
      },
      relations: ['books'],
    });
  }

  createAuthor(author: AuthorEntity): Observable<AuthorEntity> {
    return from(this.authorRepo.save(author));
  }

  getAuthorById(authorID: number): Promise<{}> {
    return this.authorRepo.findOne({ where: { id: authorID } });
  }
}
