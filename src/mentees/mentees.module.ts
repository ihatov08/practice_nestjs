import { Module } from '@nestjs/common';
import { MenteesService } from './mentees.service';
import { MenteesController } from './mentees.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Mentee } from './mentee.model';

@Module({
  imports: [SequelizeModule.forFeature([Mentee])],
  providers: [MenteesService],
  controllers: [MenteesController],
  exports: [SequelizeModule],
})
export class MenteesModule {}
