import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs'
import { leaderboardModel } from './models/leaderboardModels/leaderboard'
import { APIURL } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(private http: HttpClient) { }
  users: any
  showTable = false
  getLeaderboard(): Observable<leaderboardModel> {
    const httpAuth = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };

    return this.http.get<leaderboardModel>(`${APIURL}/league/current`, httpAuth)
    // console.log('users return:', users)
    // .subscribe(data => console.log(data))
  }
}
