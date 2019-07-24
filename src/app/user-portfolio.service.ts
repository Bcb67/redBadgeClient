import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserPortfolioService {
  url:string = "http://localhost:3000/user/"
  id:number
  constructor(
    private http: HttpClient,
  
  ) { }

  // GET list of public, future events
  getUserPortfolio(){
    return this.http.get(this.url+this.id)
       
  }
}