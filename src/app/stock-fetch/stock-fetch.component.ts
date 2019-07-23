import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { DatabaseService } from '../stock-fetch.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-stock-fetch',
  templateUrl: './stock-fetch.component.html',
  styleUrls: ['./stock-fetch.component.css'],
})
export class StockFetchComponent implements OnInit {
  names = [];
  display: any;
  display2: any;
  prices = [];
  click = false;
  coins = [];
  disp = false;
  top24: any;

  constructor(
    private dbService: DatabaseService,
    private spinner: NgxSpinnerService
  ) { }

  tableButtonThing() {
    this.display = this.dbService.fetchSymbolInfo(this.names)
    this.display2 = []
    this.prices = []
    this.coins = []
    this.display2 = this.dbService.getPortfolioValues(this.display)
    this.prices = this.dbService.symPrice
    this.coins = this.dbService.getCoinNames()
    this.click = true
    // this.dbService.getdbObject()
    return this.display2
  }
  
  ngOnInit() {
    this.spinner.show();

    // Table onIit Stuff
    /** spinner starts on init */
    this.spin()
    this.names = this.dbService.getSymbolNames()
    this.display = this.dbService.fetchSymbolInfo(this.names)
    this.display2 = this.dbService.getPortfolioValues(this.display)
    this.coins = this.dbService.getCoinNames()

    // cards
    // this.top24 = this.dbService.getTop24hr()
    // this.spin()
  }

  button() {
    this.spin()
    console.log(this.top24);
  }

  spin() {
    if(this.dbService.firstTime){
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        // this.spinner.hide();
        // this.top24 = this.dbService.getTop24hr()
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
          // this.disp = true;
        }, 1500);
      }, 3000);
    }
    this.dbService.firstTime = false;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.tableButtonThing()
    }, 1000)
    // 500 for local fetch, 1000 for tablefetch
  }
}


// [
//   {
//     CoinInfo: {
//       FullName: 'BitCoin',
//       Name: 'BTC',
//       ImageUrl: '/media/19633/btc.png'
//     },
//     DISPLAY: {
//       CHANGEPCT24HOUR: '-2.24',
//       PRICE: '$223345'
//     }
//   }
// ]