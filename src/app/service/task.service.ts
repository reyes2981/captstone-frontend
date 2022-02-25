import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Completed } from '../enum/completed.enum';
import { CustomResponse } from '../interface/custom-response';

@Injectable({ providedIn: 'root' })
export class TaskService {
  
  private readonly apiUrl = 'any';

  constructor(private http: HttpClient) { }

  tasks$ = <Observable<CustomResponse>>
  this.http.get<CustomResponse>(`${this.apiUrl}/task/list`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  save$ = (task: Task) => <Observable<CustomResponse>>
  this.http.post<CustomResponse>(`${this.apiUrl}/task/save`, task)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  // filter$ = (completed: Completed, response: CustomResponse) => <Observable<CustomResponse>>
  // new Observable<CustomResponse>(
  //   subscriber => {
  //     console.log(response);
  //     subscriber.next(
  //       completed === Completed.FALSE ? { ...response, message: `Tasks filtered by ${completed} completed`} :
  //       {
  //         ...response,
  //         message: response.data.tasks.filter(task => task.)
  //       }
  //     )
  //   }
  // )
  // .pipe(
  //   tap(console.log),
  //   catchError(this.handleError)
  // );

  // delete$ = (taskId: number) => <Observable<CustomResponse>>
  // this.http.delete<CustomResponse>(`${this.apiUrl}/task/delete/${taskId}`)
  // .pipe(
  //   tap(console.log),
  //   catchError(this.handleError)
  // );

  handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError(`An error occured - Erro code: ${error.status}`);
  }
}



//what is an observable?
// angular makes use of observables as an interface to handle a variety of 
// common asynchronous operations. For example: You can define custom events 
// that send observable output data from a child to a parent component.

//reactive method instead of procedural
