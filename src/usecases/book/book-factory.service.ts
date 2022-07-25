// DTOをビジネスブックオブジェクトに変換

import { Injectable } from '@nestjs/common';
import { Book } from 'src/domains/entities/book.entity';
import { CreateBookDto, UpdateBookDto } from 'src/domains/dtos/book.dto';

@Injectable()
export class BookFactoryService {
  createNewBook(createBookDto: CreateBookDto) {
    const newBook = new Book();
    newBook.title = createBookDto.title;
    newBook.author = createBookDto.authorId;
    newBook.genre = createBookDto.genreId;
    newBook.publishDate = createBookDto.publishDate;

    return newBook;
  }

  updateBook(updateBookDto: UpdateBookDto) {
    const newBook = new Book();
    newBook.title = updateBookDto.title;
    newBook.author = updateBookDto.authorId;
    newBook.genre = updateBookDto.genreId;
    newBook.publishDate = updateBookDto.publishDate;

    return newBook;
  }
}
