import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stocks } from "./models/stocks.model"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  private dbUrl = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD';
  data = {}

  constructor(private http: HttpClient) { }

  getStocks(): Observable<Stocks[]> {
    return this.http.get<Stocks[]>(this.dbUrl)
  }
  // getStocks() {
  //   this.http.get(encodeURI(this.dbUrl)).subscribe(this.data)
  // }

}