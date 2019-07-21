import { Injectable } from '@angular/core';
import { Task } from '../model/Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private url = 'http://localhost:3000/tasks';
  task$: Subscription;

  constructor(private httpClient: HttpClient) { }


  getTasks(): Observable<Array<Task>> {
    return this.httpClient.get<Array<Task>>(this.url);
  }

  postTask(task: Task): Observable<Task> {  
    return this.httpClient.post<Task>(this.url, task, httpOptions);
    
  }

  putTask(task: Task): Observable<any> {
    return this.httpClient.put<any>(this.url, task, httpOptions);
  }

  deleteTask(task: Task): Observable<any> {
    const id = task.id;
    const url = `${this.url}/${id}`;
    return this.httpClient.delete<Array<Task>>(url, httpOptions);
  }
}