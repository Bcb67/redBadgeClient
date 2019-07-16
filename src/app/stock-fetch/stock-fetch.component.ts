import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { DatabaseService } from '../stock-fetch.service'

@Component({
  selector: 'app-stock-fetch',
  templateUrl: './stock-fetch.component.html',
  styleUrls: ['./stock-fetch.component.css'],
})
export class StockFetchComponent implements OnInit {

  // stock = {};
  // symbols = {};
  // BTC,ETH&tsyms=USD,EUR'
  names: any;
  display: any;
  display2: any;  
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
    // private http: HttpClient,
    private dbService: DatabaseService,
  ) { }

  buttonThing() {
    // console.log('names: ', this.names)
    this.display = this.dbService.fetchSymbolInfo(this.names)
    this.display2 = this.dbService.getPortfolioValues(this.display)
    return this.display2
  }

  ngOnInit() {
    this.names = this.dbService.getSymbolNames()
    // this.dbService.coinlist().subscribe((data: any) => { console.log(data) })
    // this.url = this.baseurl + this.names + '&tsyms=USD'
    // this.http.get(this.url).subscribe((dat: any) => {console.log(dat)})
    // console.log(this.stock)
  }

}

//     (data: any) => {
//       this.ship = data.results[0]
//     }