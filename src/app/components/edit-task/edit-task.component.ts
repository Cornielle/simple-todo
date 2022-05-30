import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
})
export class EditTaskComponent implements OnInit {

  id: any = ''
  constructor(
    private fb: FormBuilder,
    public taskService: TaskService,
    private route: ActivatedRoute,
    //this router is differen than
    //the previous one, and at the moment is used to redirect to list whenever is needed
    private router: Router
  ) {}

  editTaskForm = this.fb.group({
    title: '',
    description: '',
  })
  ngOnInit(): void {
    //intends to get the id parameter via link in order to search the specific task
    this.id = this.route.snapshot.paramMap.get('id')
    this.getTask(this.id)
  }

  getTask(id: any){
    const task = this.taskService.findTaskByIndex(id)
    this.editTaskForm = this.fb.group({
      title: [task.title, Validators.required],
      description: [task.description, Validators.required],
    })

  }

  editTask(newTitle: HTMLInputElement, newDescription: HTMLTextAreaElement){
    // getting the value
    const value = this.editTaskForm.value
    //validate if the value is not null or undefined
    if(value['title'] && value['description']) {
    //set the values of title and description and pass the id to find and edit the task
      this.taskService.editTask({
        title: newTitle.value,
        description: newDescription.value,
        success: false,
      },this.id)

      this.router.navigateByUrl('/list')
    }
  }
}
