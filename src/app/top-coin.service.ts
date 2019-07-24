import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { throwError as ObservableThrowError, Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { Data } from './models/DataModel';

@Injectable()
export class TopCoinService {
  url:string = "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD"

  constructor(
    private http: HttpClient,
  
  ) { }

  // GET list of public, future events
  getTopCoins(){
    return this.http.get(this.url)
       
  }
}