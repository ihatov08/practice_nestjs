import { Injectable } from '@nestjs/common';
import { Book } from 'src/domains/entities/book.entity';
import { IDataServices } from 'src/domains/abstracts/data-services.abstract';
import { ICrmServices } from 'src/domains/abstracts/crm-services.abstract';

@Injectable()
export class BookUseCases {
  constructor(
    private dataServices: IDataServices,
    private CrmServices: ICrmServices,
  ) {}

  getAllBooks(): Promise<Book[]> {
    return this.dataServices.books.getAll();
  }

  getBookById(id: any): Promise<Book> {
    return this.dataServices.books.get(id);
  }

  async createBook(book: Book): Promise<Book> {
    try {
      const createBook = await this.dataServices.books.create(book);
      await this.CrmServices.bookAdded(createBook);

      return createBook;
    } catch (error) {
      throw error;
    }
  }

  updateBook(bookId: string, book: Book): Promise<Book> {
    return this.dataServices.books.update(bookId, book);
  }
}
