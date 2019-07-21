import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/task-service.service';
import { Task } from '../../model/Task';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  task$: Subscription;
  tasks: Array<Task>;

  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(data => this.tasks = data);
  }

  ngOnDestroy(): void {
    if (this.task$ !== undefined) {
      this.task$.unsubscribe();
    }
  }

  deleteTask(task: Task) {
    this.task$ = this.taskService.deleteTask(task).subscribe(res => {
      if (res) {
        this.tasks = this.tasks.filter(t => t.id !== task.id);
      }
    });
  }

  addTask(task: Task) {
    this.task$ = this.taskService.postTask(task).subscribe(data => {
      this.tasks.push(data);
    });
  }
}
