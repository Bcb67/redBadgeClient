import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, fromEventPattern } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from './models/UserModel';
import { Login } from './models/LoginModel';
import { UserCoins } from './models/UserCoins';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { APIURL } from 'src/environments/environment.prod';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  id: number;
  username: string
  constructor(private http: HttpClient, private router: Router, public jwtHelper: JwtHelperService) { }
  currentID: number
  suli = true;
  signuppURL = `${APIURL}/user/signup`
  loginURL = `${APIURL}/user/signin`
  landingURL = `${APIURL}`
  portfolioURL = `${APIURL}/user/`

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.signuppURL, user, httpOptions)
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status},` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
  loginUser(login: Login): Observable<User> {
    return this.http.post<User>(this.loginURL, login, httpOptions)
  }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
  getUserCoins(): Observable<UserCoins> {
    const httpAuth = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.get<UserCoins>(this.portfolioURL+this.currentID, httpAuth);
  }
}