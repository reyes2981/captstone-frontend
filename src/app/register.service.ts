import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl = "http://localhost:9092/registration";

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<Object> {
    console.log(user);
    return this.http.post(`${this.baseUrl}`, user);
  }
}
