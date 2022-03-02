import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private baseUrl ="http://localhost:9092/api/v1/users";
  constructor(private http: HttpClient) { }

  getUserList(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}`)
  }

  getUserById(id: number): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  updateUser(id: number, user: User): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, user);
  }

  deleteUser(id: number) : Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
