import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "./user";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    public getUsers(): Observable<User[]> {
        return this.http.get<any>(`${this.apiServerUrl}/user/list`)
    }

    public postUser(user: User): Observable<User> {
        return this.http.post<User>(`${this.apiServerUrl}/user/add`, user);
    }

    public updateUser(user: User): Observable<User> {
        return this.http.put<User>(`${this.apiServerUrl}/user/add`, user);
    }

    public deleteUser(userId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/user/delete/${userId}`);
    }
}