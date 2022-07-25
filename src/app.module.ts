import { Module } from '@nestjs/common';
import { BookController } from './book/book.controller';

@Module({
  imports: [],
  controllers: [BookController],
})
export class AppModule {}
