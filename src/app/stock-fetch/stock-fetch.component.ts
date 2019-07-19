import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { DatabaseService } from '../stock-fetch.service';

@Component({
  selector: 'app-stock-fetch',
  templateUrl: './stock-fetch.component.html',
  styleUrls: ['./stock-fetch.component.css'],
})
export class StockFetchComponent implements OnInit {
  
  names= [];
  display: any;
  display2: any;
  prices= [];
  click = false;
  coins= [];
  // private symbolnameData: any = {
  //   'Bitcoin': 'BTC',
  //   'Ethereum': 'ETH',
  //   'Ripple': 'XRP',
  //   'Bitcoin Cash': 'BCH',
  //   'Litecoin': 'LTC',
  //   'Cardano': 'ADA',
  //   'NEO': 'NEO',
  //   'Stellar': 'XLM',
  //   'Monero': 'XMR',
  //   'EOS': 'EOS',
  //   'IOTA': 'IOT',
  //   'Dash': 'DASH',
  //   'NEM': 'XEM',
  //   'TRON': 'TRX',
  //   'Eth Classic': 'ETC',
  //   'Tether': 'USDT',
  //   'VeChain': 'VEN',
  //   'Qtum': 'QTUM',
  //   'Nano': 'XRB',
  //   'Lisk': 'LSK',
  //   'Bitcoin Gold': 'BTG',
  //   'OmiseGo': 'OMG',
  //   'ICON': 'ICX',
  //   'Zcash': 'ZEC',
  //   'Digix DAO': 'DGD',
  //   'Binance Coin': 'BNB',
  //   'Steem': 'STEEM',
  //   'Verge': 'XVG',
  //   'Stratis': 'STRAT',
  //   'Populous': 'PPT',
  //   'ByteCoin': 'BCN',
  //   'Waves': 'WAVES',
  //   'Siacoin': 'SC',
  //   'Status': 'SNT',
  //   'RChain': 'RHOC',
  //   'Maker': 'MKR',
  //   'DogeCoin': 'DOGE',
  //   'Bitshares': 'BTS',
  //   'Decred': 'DCR',
  //   'Aeternity': 'AE',
  //   'Waltonchain': 'WTC',
  //   'Augur': 'REP',
  //   'Electroneum': 'ETN',
  //   '0x': 'ZRX',
  //   'Komodo': 'KMD',
  //   'Bytom': 'BTM',
  //   'ARK': 'ARK',
  //   'Veritaseum': 'VERI',
  //   'Ardor': 'ARDR',
  //   'Golem': 'GNT',
  //   'Dragonchain': 'DRGN',
  //   'Hshare': 'HSR',
  //   'BAT': 'BAT',
  //   'Cryptonex': 'CNX',
  //   'SysCoin': 'SYS',
  //   'Zilliqa': 'ZIL',
  //   'KuCoin': 'KCS',
  //   'DigiByte': 'DGB',
  //   'Ethos': 'BQX',
  //   'Gas': 'GAS'
  // };

  constructor(
    private dbService: DatabaseService,
  ) { }

  buttonThing() {
    this.display = this.dbService.fetchSymbolInfo(this.names)
    this.display2 = this.dbService.getPortfolioValues(this.display)
    this.prices = this.dbService.symPrice
    this.coins = this.dbService.getCoinNames()
    this.click=true
    // this.dbService.getdbObject()
    return this.display2
  }

  ngOnInit() {
    this.names = this.dbService.getSymbolNames()
    this.display = this.dbService.fetchSymbolInfo(this.names)
    this.display2 = this.dbService.getPortfolioValues(this.display)
    this.coins = this.dbService.getCoinNames()
  }

}
