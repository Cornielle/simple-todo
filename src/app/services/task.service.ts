import { Task } from '../models/Task';
export class TaskService {
  public tasks: Task[] = [];

  public findTaskIndex(task: Task) {
    this.tasks.indexOf(task);
  }

  public findTaskByIndex(id: any) {
    this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    return this.tasks[id];
  }

  public markAsDone(id: number) {
    this.tasks[id].finished = !this.tasks[id].finished;
  }

  public getTasks() {
    try {
      this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    } catch (error) {
      if (error instanceof Error) {
        this.tasks = [];
      }
    }
    return this.tasks;
  }

  public addTask(title: string, description: string) {
    const canAdd = title !== '' && description !== '';
    const task: Task = {
      title,
      description,
      finished: false,
    };

    if (!canAdd) {
      return false;
    }

    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    return task;
  }

  public editTask(title: string, description: string, id: any) {
    const canEdit =
      title !== '' && description !== '' && id !== '' && id !== null;

    const task: Task = {
      title,
      description,
      finished: false,
    };
    this.tasks[id] = task;

    if (!canEdit) {
      return false;
    }
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    return task;
  }

  public deleteTask(id: any) {
    this.tasks.splice(id, 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
