import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse,HttpRequest } from '@angular/common/http';
import { Task } from '../model/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private baseUrl = 'http://localhost:4000/task';

  constructor(private http: HttpClient) {}

  getTask(_id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${_id}`);
  }

  createTask(task: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, task);
  }

  updateTask(_id: string, task: object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${_id}`, task);
  }

  deleteTask(_id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${_id}`, { responseType: 'text' });
  }

  getTasks(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  updateStatus(_id: string, status: boolean): Observable<any> {
    return this.http.put(`${this.baseUrl}/done/${_id}`, status);
  }
}
