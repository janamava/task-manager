import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../model/Task';
import { TasksService } from '../../services/task-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter(); //smth out to parent component
  constructor(private taskService: TasksService) { } 

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      task: true,
      'is-completed': this.task.status
    }
    return classes;
  }

  onToggle(task) {
    this.taskService.putTask(task).subscribe(res => {
      if (res.message === "success") {
        task.status = !task.status;
      }
    });
  }

  onDelete(task) {
    this.deleteTask.emit(task);
  }
}
