import { Task } from '../models/Task';
export class TaskService {
  tasks: Task[];
  constructor() {
    this.tasks = [];
  }
  findTaskIndex(task: Task) {
    this.tasks.indexOf(task);
  }
  findTaskByIndex(id: any) {
    this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    return this.tasks[id];
  }
  markAsDone(id: number) {
    this.tasks[id].finished = !this.tasks[id].finished;
  }
  getTasks() {
    this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    return this.tasks;
  }

  addTask(title: string, description: string) {
    const canAdd = title !== '' && description !== '';
    const task: Task = {
      title,
      description,
      finished: false,
    };
    //validate if the value is not null or undefined
    if (!canAdd) {
      return false;
    }
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    return task;
  }

  editTask(title: string, description: string, id: any) {
    const canEdit =
      title !== '' && description !== '' && id !== '' && id !== null;

    const task: Task = {
      title,
      description,
      finished: false,
    };
    this.tasks[id] = task;
    //validate if the value is not null or undefined
    if (!canEdit) {
      return false;
    }
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    return task;
  }

  deleteTask(id: any) {
    this.tasks.splice(id, 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
