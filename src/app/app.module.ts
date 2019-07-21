import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { UserInputComponent } from './components/user-input/user-input.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TaskComponent } from './components/task/task.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UserInputComponent,
    TasksComponent,
    TaskComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
