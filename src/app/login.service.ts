import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = "http://localhost:9092/login";

  constructor(private http: HttpClient) { }

  loginUser(user: User): Observable<Object>{
    console.log(user);
    return this.http.post(`${this.baseUrl}`, user);
  }

}
