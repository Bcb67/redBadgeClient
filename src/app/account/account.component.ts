import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from '../stock-fetch.service'

@Component({
  selector: 'app-stock-fetch',
  templateUrl: './stock-fetch.component.html',
  styleUrls: ['./stock-fetch.component.css'],
})
export class AccountComponent implements OnInit {

  // stock = {};
  // symbols = {};
  baseurl = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms='
  // BTC,ETH&tsyms=USD,EUR'
  names: any;
  url: any;
  display: any;

  constructor(
    private http: HttpClient,
    private dbService: DatabaseService,
  ) { }

  buttonThing(input) {
    // console.log('names: ', this.names)
    this.url = this.baseurl + input + '&tsyms=USD'
    this.http.get(this.url).subscribe((dat: any) => {this.display = dat; console.log(this.display)})
    
  }

  ngOnInit() {
    this.names = this.dbService.getNames()
    // this.dbService.coinlist().subscribe((data: any) => { console.log(data) })
    // this.url = this.baseurl + this.names + '&tsyms=USD'
    // this.http.get(this.url).subscribe((dat: any) => {console.log(dat)})
    // console.log(this.stock)
  }

}

//     (data: any) => {
//       this.ship = data.results[0]
//     }