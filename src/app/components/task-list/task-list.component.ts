import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  taskAnnounce: string = '';
  draggedTaskIndex: number = 0;

  constructor(public TaskService: TaskService) {}

  ngOnInit() {
    const tasks = this.TaskService.getTasks();
    this.tasks = tasks;
  }

  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
  public markAsDone(task: Task) {
    const index = this.tasks.indexOf(task);
    this.TaskService.markAsDone(index);
  }
  public deleteTask(task: Task) {
    const index = this.tasks.indexOf(task);
    this.TaskService.deleteTask(index);
  }
}
