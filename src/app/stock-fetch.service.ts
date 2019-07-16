import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stocks } from "./models/stocks.model"
import { coinModel } from './models/coinModel.model'
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  // private allUrl = 'https://min-api.cryptocompare.com/data/all/coinlist'
  // getStocks(): Observable<Stocks[]> {
  //   return this.http.get<Stocks[]>(this.dbUrl)
  // }

  // private dbUrl = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=CLAM,WTT&to_currency=USD&apikey=81A9SMJUX2B387P9';
  // apiKey = '81A9SMJUX2B387P9'
  data = {}

  constructor(private httpClient: HttpClient) { }

  coinlist(): Observable<coinModel[]> {
    return this.httpClient
      .get('https://min-api.cryptocompare.com/data/all/coinlist')
      .pipe(
        map(x => this.convertKeysToKebabCase(x)),
        filter(
          (x: Stocks) => x.response.toLowerCase() === 'success'
        ),
        map(x =>
          Object.values(x.data)
            .filter(y => y.sortOrder <= 100)
            // sort list
            .sort((a, b) => a.sortOrder - b.sortOrder)
            .map(y => {
              y.imageUrl = x.baseImageUrl + y.imageUrl;
              return y;
            })
        )
      );
  }

  private convertKeysToKebabCase(obj) {
    const output = {};
    for (const i in obj) {
      if (Object.prototype.toString.apply(obj[i]) === '[object Object]') {
        output[
          i.substr(0, 1).toLowerCase() + i.substr(1)
        ] = this.convertKeysToKebabCase(obj[i]);
      } else if (Object.prototype.toString.apply(obj[i]) === '[object Array]') {
        output[i.substr(0, 1).toLowerCase() + i.substr(1)] = [];
        output[i.substr(0, 1).toLowerCase() + i.substr(1)].push(
          this.convertKeysToKebabCase(obj[i][0])
        );
      } else {
        output[i.substr(0, 1).toLowerCase() + i.substr(1)] = obj[i];
      }
    }
    return output;

    // getAllStocks(): Observable<Stocks[]>{
    //   return this.http.get<Stocks[]>(this.allUrl)
    // }

  }
}