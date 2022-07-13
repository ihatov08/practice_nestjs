import { Controller, Get } from '@nestjs/common';
import { MenteesService } from './mentees.service';
import { Mentee } from './mentee.model';

@Controller('mentees')
export class MenteesController {
  constructor(private menteesService: MenteesService) {}

  @Get()
  getMentees(): Promise<Mentee[]> {
    return this.menteesService.findAll();
  }
}
