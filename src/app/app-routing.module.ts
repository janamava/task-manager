import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './components/tasks/tasks.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'about', component: AboutComponent}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
