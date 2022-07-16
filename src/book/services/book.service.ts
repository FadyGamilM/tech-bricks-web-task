import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { AuthorEntity } from 'src/author/models/author.entity';
import { Repository } from 'typeorm';
import { BookEntity } from '../models/book.entity';

@Injectable()
export class BookService {
  // inject the book repository to deal with DB
  constructor(
    @InjectRepository(BookEntity)
    private bookRepo: Repository<BookEntity>,
  ) {}
  /* ---------------------------- Logic Description --------------------------- */
  // @ Description:     Get all books
  // @ EndPoint:        /book
  // @ Method:          GET
  getAllBooks(): Promise<{}> {
    return this.bookRepo.find({
      relations: ['author'],
    });
  }
  /* -------------------------------------------------------------------------- */

  /* --------------- Creatae a new Book for seeding our database -------------- */
  createBook(book: BookEntity): Observable<BookEntity> {
    return from(this.bookRepo.save(book));
  }
  /* -------------------------------------------------------------------------- */

  /* ---------------------------- Logic Description --------------------------- */
  // @ Description:     Get the publisher and the published Books
  // @ EndPoint:        /book/publisher
  // @ Method:          GET
  async GetBooksGroupedByPublisher(): Promise<{}> {
    // the response will be object of objects,
    // each object has:
    //            =>  a key contains the name of the publisher
    //            =>  a value contains an array of objects , each object is the book object without the publisher property
    const result = {};
    // find all books from database using the repository
    await this.bookRepo
      .find({
        // specify the realtion
        relations: ['author'],
      })
      .then((info) =>
        info.forEach((bookObj) => {
          // if we haven't seen this publisher before, so store it as a new key-value pair
          if (!result[bookObj.publisher]) {
            // define the value of this publisher as empty array for the first time
            result[bookObj.publisher] = [];
            // get the publisher name before deleting it
            const publisherName = bookObj.publisher;
            // delte the publisher name because there is no need for it anymore "just my point of view"
            delete bookObj.publisher;
            // store the key-value pair
            result[publisherName].push(bookObj);
          } else {
            const publisherName = bookObj.publisher;
            delete bookObj.publisher;
            result[publisherName] = [...result[publisherName], bookObj];
          }
        }),
      );

    return result;
  }
  /* -------------------------------------------------------------------------- */
  // //   get books of specific author
  // getBooksByAuthorName(author: AuthorEntity): Promise<BookEntity[]> {
  //   return this.bookRepo.find({ where: { author: author } });
  // }
}
