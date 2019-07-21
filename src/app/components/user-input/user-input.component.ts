import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../../services/task-service.service';
import { Subscription } from 'rxjs';
import { Task } from '../../model/Task';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  task$: Subscription;
  formGroup: FormGroup;
  isValid: boolean = false;
  @Output() addTask: EventEmitter<Task> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private taskService: TasksService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      description: ['', Validators.required],
      status: [false]
    })

    this.formGroup.valueChanges.subscribe(() => this.isValid = this.formGroup.valid);
  }

  ngOnDestroy(): void {
    if (this.task$ !== undefined) {
      this.task$.unsubscribe();
    }
  }

  sendNewTask() {
    if (this.formGroup.valid) {
      this.addTask.emit(this.formGroup.value);
      this.formGroup.reset();
    }
  }
}