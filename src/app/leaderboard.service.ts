import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs'
import { leaderboardModel } from './models/leaderboardModels/leaderboard'

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(private http: HttpClient) { }
  users: any
  getLeaderboard(): Observable<leaderboardModel> {
    const httpAuth = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };

    return this.http.get<leaderboardModel>('http://localhost:3000/league/current', httpAuth)
    // console.log('users return:', users)
    // .subscribe(data => console.log(data))
  }
}
