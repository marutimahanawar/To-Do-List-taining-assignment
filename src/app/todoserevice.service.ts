import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosereviceService {

  private apiUrl = 'http://localhost:3000/task';

  constructor(private http:HttpClient) {}

  createTask(taskData: any): Observable<any> {
    return this.http.post(this.apiUrl, taskData);
  }

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  updateTask(id: number, task: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, task);
  }
  deleteTask(taskId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${taskId}`)
  }
  getupdatetask(id:any)
  {
    return this.http.get(`${this.apiUrl}/${id}`)
  }
}
