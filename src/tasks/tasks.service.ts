import { Injectable } from '@nestjs/common';
import { Task, taskStatus } from './task.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  public getAllTasks(): Task[] {
    return this.tasks;
  }

  public createTask(title: string, description: string): Task {
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: taskStatus.OPEN,
    };

    this.tasks.push(task);

    return task;
  }
}
