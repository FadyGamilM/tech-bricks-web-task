import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BookEntity } from '../models/book.entity';
import { BookService } from '../services/book.service';

@Controller('api/book')
export class BookController {
  // inject the book service
  constructor(private readonly bookService: BookService) {}
  /* ---------------------------- Logic Description --------------------------- */
  // @ Description:     Get all books
  // @ EndPoint:        /book
  // @ Method:          GET
  @Get()
  async getAllBooks(): Promise<{}> {
    return await this.bookService.getAllBooks();
  }
  /* -------------------------------------------------------------------------- */

  /* ---------------------------- Logic Description --------------------------- */
  // @ Description:     Add a new book into the database
  // @ EndPoint:        /book
  // @ Method:          POST
  @Post()
  create(@Body() book: BookEntity): Observable<BookEntity> {
    return this.bookService.createBook(book);
  }

  /* ---------------------------- Logic Description --------------------------- */
  // @ Description:     Get the publisher and the published Books
  // @ EndPoint:        /book/publisher
  // @ Method:          GET
  @Get('publishers')
  getPublishersAndPublishedBooks() : Promise<{}> {
    return this.bookService.GetBooksGroupedByPublisher();
  }
}
