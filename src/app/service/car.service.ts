import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Car} from "../model/car";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiServer = "http://localhost:8080/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  create(car): Observable<Car> {
    return this.httpClient.post<Car>(this.apiServer + 'api/add-cars/', JSON.stringify(car), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  getById(id): Observable<Car> {
    return this.httpClient.get<Car>(this.apiServer + 'api/cars/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getAll(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.apiServer + 'api/all-cars/')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(id, car): Observable<Car> {
    return this.httpClient.put<Car>(this.apiServer + 'api/cars/' + id, JSON.stringify(car), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id){
    return this.httpClient.delete<Car>(this.apiServer + 'api/cars/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
