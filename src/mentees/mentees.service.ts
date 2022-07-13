import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Mentee } from './mentee.model';

@Injectable()
export class MenteesService {
  constructor(
    @InjectModel(Mentee)
    private MenteeModel: typeof Mentee,
  ) {}

  async findAll(): Promise<Mentee[]> {
    return this.MenteeModel.findAll();
  }

  findOne(id: string): Promise<Mentee> {
    return this.MenteeModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const mentee = await this.findOne(id);
    await mentee.destroy();
  }
}
