import { TaskStatus } from '../task.model';

export class GetTasksFilterDto {
  // ?は省略可能なプロパティ
  status?: TaskStatus;
  search?: string;
}
