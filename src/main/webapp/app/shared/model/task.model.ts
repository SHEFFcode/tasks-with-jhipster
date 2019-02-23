import { Moment } from 'moment';

export interface ITask {
  id?: number;
  name?: string;
  dueDate?: Moment;
  completed?: boolean;
}

export const defaultValue: Readonly<ITask> = {
  completed: false
};
