import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Server } from 'http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { CustomResponse } from '../interface/custom-response';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private readonly apiUrl = 'any';

  constructor(private http: HttpClient) {
  }

  save$ = (server: Server) => <Observable<CustomResponse>>
    this.http.post<CustomResponse>(`${this.apiUrl}/task/save`, server)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );

  delete$ = (serverId: number) => <Observable<CustomResponse>>
    this.http.delete<CustomResponse>(`${this.apiUrl}/task/delete/${serverId}`)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );

  fitler$ = (serverId: number) => <Observable<CustomResponse>>
    this.http.delete<CustomResponse>(`${this.apiUrl}/task/delete/${serverId}`)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );


  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error)
    return throwError(`An error occured - Error code: ${error.status}`);
  }
  //reactive method instead of procedural
}

//what is an observable?
// angular makes use of observables as an interface to handle a variety of 
// common asynchronous operations. For example: You can define custom events 
// that send observable output data from a child to a parent component.