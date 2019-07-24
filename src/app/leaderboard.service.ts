import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(private http: HttpClient) { }

  getLeaderboard() {
    return this.http.get('http://localhost:3000/league/current').subscribe(data => console.log(data))
  }

}
