import { Injectable } from '@angular/core';
import { TASKS } from '../mock-task';
import { Tasks } from '../Tasks';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }

  getTask(): Observable<Tasks[]>{
    return this.http.get<Tasks[]>(this.apiUrl)
  }
  deleteTask(task:Tasks): Observable<Tasks> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Tasks>(url);
  }
  addTask(task: Tasks):Observable<Tasks>{
    return this.http.post<Tasks>(this.apiUrl, task);
  }
}
