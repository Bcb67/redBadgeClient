import { Component } from '@angular/core';
import { DatabaseService } from '../stock-fetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  objectKeys = Object.keys;
  cryptos: any;

  constructor(private _data: DatabaseService) {

  }

  ngOnInit() {
    this._data.getStocks()
      .subscribe(res => {
        this.cryptos = res;
        console.log(res);
      });
  }

}
