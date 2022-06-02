import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskService } from './services/task.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
@NgModule({
  declarations: [AppComponent, routingComponents, EditTaskComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    DragDropModule,
    InputTextModule,
    ButtonModule,
    InputTextareaModule,
    CardModule,
  ],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
