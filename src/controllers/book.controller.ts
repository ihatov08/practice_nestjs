import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateBookDto, UpdateBookDto } from 'src/domains/dtos/book.dto';
import { CreateBookResponseDto } from 'src/domains/dtos/create-book-response.dto';
import { BookFactoryService } from 'src/usecases/book/book-factory.service';
import { BookUseCases } from 'src/usecases/book/book.usecase';

@Controller('api/book')
export class BookController {
  constructor(
    private bookUsebCases: BookUseCases,
    private bookFactoryService: BookFactoryService,
  ) {}

  @Post()
  async createBook(@Body() bookDto: CreateBookDto) {
    const createBookResponse = new CreateBookResponseDto();
    try {
      const book = this.bookFactoryService.createNewBook(bookDto);
      const createdBook = await this.bookUsebCases.createBook(book);

      createBookResponse.success = true;
      createBookResponse.createBook = createdBook;
    } catch (error) {
      createBookResponse.success = false;
    }

    return createBookResponse;
  }
}
