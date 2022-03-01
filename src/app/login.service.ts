import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = "http://localhost:9092/login";

  constructor(private http: HttpClientModule) { }

  loginUser(user: User): Observable<Object>{
    return this.http.post();
  }

}
