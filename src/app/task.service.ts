import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from './task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiServerUrl}/task/save`, task);
  }

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiServerUrl}/task/list`);
  }



}
