import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
})
export class EditTaskComponent implements OnInit {
  public id: string | null = '';

  public editTaskForm = this.fb.group({
    title: '',
    description: '',
  });

  constructor(
    public taskService: TaskService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getTask(this.id);
  }

  public getTask(id: string | null = '') {
    const task = this.taskService.findTaskByIndex(id);
    this.editTaskForm = this.fb.group({
      title: [task.title, Validators.required],
      description: [task.description, Validators.required],
    });
  }

  public editTask(
    newTitle: HTMLInputElement,
    newDescription: HTMLTextAreaElement
  ) {
    this.taskService.editTask(newTitle.value, newDescription.value, this.id);
    this.router.navigateByUrl('/list');
  }
}
