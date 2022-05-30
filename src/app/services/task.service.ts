import { Task } from '../models/Task'
export class TaskService {
  tasks: Task[];
  constructor() {
    this.tasks = []
  }
  findTask(task: Task){
    this.tasks.indexOf(task)
  }
  findTaskByIndex(id: any){
    this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    return this.tasks[id]
  }
  markAsDone(id: number){
    this.tasks[id].finished = !this.tasks[id].finished
  }
  getTasks(){
    this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    return this.tasks;
  }

  addTask(task: Task){
    this.tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  editTask(title: string, description: string, id: any){
    const task: Task = {
        title,
        description,
        finished: false,
      }
    this.tasks[id] = task
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
    const taskEdited = JSON.parse(localStorage.getItem('tasks') || '[]');
    return taskEdited;
  }

  deleteTask(id: any){
    this.tasks.splice(id, 1)
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}
