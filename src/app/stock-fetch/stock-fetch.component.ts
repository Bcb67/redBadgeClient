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
  constructor(
    private dbService: DatabaseService,
    private spinner: NgxSpinnerService
  ) { }

  buttonThing() {
    this.display = this.dbService.fetchSymbolInfo(this.names)
    this.display2 = this.dbService.getPortfolioValues(this.display)
    this.prices = this.dbService.symPrice
    this.coins = this.dbService.getCoinNames()
    this.click = true
    // this.dbService.getdbObject()
    return this.display2
  }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
    this.names = this.dbService.getSymbolNames()
    this.display = this.dbService.fetchSymbolInfo(this.names)
    this.display2 = this.dbService.getPortfolioValues(this.display)
    this.coins = this.dbService.getCoinNames()

    
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.buttonThing()
    }, 1000)
    // 500 for local fetch, 1000 for tablefetch
  }

}
