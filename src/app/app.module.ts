import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskService} from './services/task.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EditTaskComponent } from './components/edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
      /*this routing which is an array type specified component's
      routes in order to maintain all the declarations
      in the routing modulea and maintain app.module clean */
    routingComponents,
      EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
