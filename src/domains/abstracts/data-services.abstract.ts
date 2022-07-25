// データベース用のサービス

import { Author } from '../entities/author.entity';
import { Book } from '../entities/book.entity';
import { Genre } from '../entities/genre.entity';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract authors: IGenericRepository<Author>;

  abstract books: IGenericRepository<Book>;

  abstract genres: IGenericRepository<Genre>;
}
