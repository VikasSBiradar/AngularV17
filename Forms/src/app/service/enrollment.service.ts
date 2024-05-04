import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../class/user';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private URL : string = 'http://localhost:3000';

  httpOptions = {
    headers : new HttpHeaders({
      'Conten-Type' :'application/json'
    })
  }
  constructor(private http : HttpClient) { }

  enroll(user : User){
      return this.http.post(this.URL+"/enroll",JSON.stringify(user),this.httpOptions);
  }

  errorHandler(error : HttpErrorResponse){
    return throwError(error);
  }
}
