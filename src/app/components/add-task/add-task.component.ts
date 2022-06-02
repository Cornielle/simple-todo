import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
})
export class AddTaskComponent {
  addTaskForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  });

  constructor(
    public taskService: TaskService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  public addTask(
    newTitle: HTMLInputElement,
    newDescription: HTMLTextAreaElement
  ) {
    this.taskService.addTask(newTitle.value, newDescription.value);

    this.addTaskForm.reset();
    this.router.navigateByUrl('/list');
  }
}
