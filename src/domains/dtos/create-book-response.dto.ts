import { Book } from '../entities/book.entity';

export class CreateBookResponseDto {
  success: boolean;

  createBook: Book;
}
