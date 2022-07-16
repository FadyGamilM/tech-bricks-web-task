import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthorEntity } from '../models/author.entity';
import { AuthorService } from '../services/author.service';

// Author Controller Serves the Endpoints that starts with "/author"
@Controller('api/author')
export class AuthorController {
  // inject the author service into the constructor
  constructor(private authorService: AuthorService) {}
  /* --------------------------- Logic Documentation -------------------------- */
  // @ Description:     Get all authors
  // @ EndPoint:        /author
  // @ Method:          GET
  @Get()
  async GetAllAuthors(): Promise<{}> {
    return await this.authorService.getAllAuthors();
  }
  /* -------------------------------------------------------------------------- */

  /* --------------------------- Logic Documentation -------------------------- */
  // @ Description:     Get an author by id and retrieve all his/her books
  // @ EndPoint:        /author/:id/books
  // @ Method:          GET
  @Get(':id/books')
  async getAuthorByIdAndHisBooks(@Param() ReqParams): Promise<AuthorEntity> {
    return this.authorService.getAuthorAndHisBooks(ReqParams.id);
  }
  /* -------------------------------------------------------------------------- */

  @Post()
  create(@Body() author: AuthorEntity): Observable<AuthorEntity> {
    return this.authorService.createAuthor(author);
  }

  @Get(':id')
  getAuthorAndBooks(@Param() params): {} {
    return this.authorService.getAuthorAndHisBooks(params.id);
  }
}
