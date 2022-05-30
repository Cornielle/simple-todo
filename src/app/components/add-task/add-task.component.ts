import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
})

export class AddTaskComponent  {
  constructor(
    private fb: FormBuilder, public taskService: TaskService,
    //this router is differen than
    //the previous one, and at the moment is used to redirect to list whenever is needed
    private router: Router
  ) {}

  addTaskForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  })

  addTask(newTitle: HTMLInputElement, newDescription: HTMLTextAreaElement){
    // getting the value
    const value = this.addTaskForm.value
    //validate if the value is not null or undefined
    if(value['title'] && value['description']) {
      this.taskService.addTask({
        title: newTitle.value,
        description: newDescription.value,
        success: false,
      })
    }
    //reset the form
    this.addTaskForm.reset();
    //setTimeout() was added just because I want to you to see
    //when the form is reset first just 500ms
    //but I can quit this whenever you want
    setTimeout(()=>{
      this.router.navigateByUrl('/list')
    },500)
  }
}
