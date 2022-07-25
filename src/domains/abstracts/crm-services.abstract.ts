import { Book } from '../entities/book.entity';

export abstract class ICrmServices {
  abstract bookAdded(book: Book): Promise<boolean>;
}
