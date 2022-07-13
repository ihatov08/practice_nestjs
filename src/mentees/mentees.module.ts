import { Module } from '@nestjs/common';
import { MenteesService } from './mentees.service';
import { MenteesController } from './mentees.controller';

@Module({
  providers: [MenteesService],
  controllers: [MenteesController]
})
export class MenteesModule {}
