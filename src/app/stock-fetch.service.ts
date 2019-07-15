import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stocks } from "./models/stocks.model"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  private dbUrl = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=LTC&to_currency=USD&apikey=81A9SMJUX2B387P9';
  apiKey = '81A9SMJUX2B387P9'
  data = {}

  constructor(private http: HttpClient) { }

  getStocks(): Observable<Stocks[]> {
    return this.http.get<Stocks[]>(this.dbUrl)
  }
  // getStocks() {
  //   this.http.get(encodeURI(this.dbUrl)).subscribe(this.data)
  // }

}