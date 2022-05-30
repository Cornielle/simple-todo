import { Injectable } from '@angular/core';
import { Task } from '../models/Task'
@Injectable({
  providedIn: 'root'
})
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
    this.tasks[id].success = !this.tasks[id].success
  }
  getTasks(){
    this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    return this.tasks;
  }

  addTask(task: Task){
    this.tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  editTask(task: Task, id: any){
    this.tasks[id] = task
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
  deleteTask(id: any){
    this.tasks.splice(id, 1)
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}
