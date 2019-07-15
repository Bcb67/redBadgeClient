import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from '../stock-fetch.service'

@Component({
  selector: 'app-stock-fetch',
  templateUrl: './stock-fetch.component.html',
  styleUrls: ['./stock-fetch.component.css']
})
export class StockFetchComponent implements OnInit {

  stock = {};
  // url = 'http://alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=81A9SMJUX2B387P9'


  constructor(
    // private http: HttpClient,
    private dbService: DatabaseService,
  ) { }

  buttonThing() {
    this.dbService.getStocks().subscribe((data: any) => { console.log(data) })
    console.log(this.stock)
  }

  ngOnInit() {
    this.dbService.getStocks().subscribe((data: any) => { console.log(data) })
    // console.log(this.stock)
  }

}

//     (data: any) => {
//       this.ship = data.results[0]
//     }