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
  // data = {}
  symbols = [];

  constructor(private http: HttpClient) { }

  baseurl = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms='
  // BTC,ETH&tsyms=USD,EUR'
 
  url: any;
  display: any;
  portSyms = [];
  portQuan = [];
  symPrice = [];

  fetchSymbolInfo(input) {
    // console.log('names: ', this.names)
    this.url = this.baseurl + input + '&tsyms=USD'
    this.http.get(this.url).subscribe((dat: any) => {this.display = dat; console.log('display:', this.display)})
    return this.display
  }
  private symbolnameData: any = {
    'Bitcoin': 'BTC',
    'Ethereum': 'ETH',
    'Ripple': 'XRP',
    'Bitcoin Cash': 'BCH',
    'Litecoin': 'LTC',
    'Cardano': 'ADA',
    'NEO': 'NEO',
    'Stellar': 'XLM',
    'Monero': 'XMR',
    'EOS': 'EOS',
    'IOTA': 'IOT',
    'Dash': 'DASH',
    'NEM': 'XEM',
    'TRON': 'TRX',
    'Eth Classic': 'ETC',
    'Tether': 'USDT',
    'VeChain': 'VEN',
    'Qtum': 'QTUM',
    'Nano': 'XRB',
    'Lisk': 'LSK',
    'Bitcoin Gold': 'BTG',
    'OmiseGo': 'OMG',
    'ICON': 'ICX',
    'Zcash': 'ZEC',
    'Digix DAO': 'DGD',
    'Binance Coin': 'BNB',
    'Steem': 'STEEM',
    'Verge': 'XVG',
    'Stratis': 'STRAT',
    'Populous': 'PPT',
    'ByteCoin': 'BCN',
    'Waves': 'WAVES',
    'Siacoin': 'SC',
    'Status': 'SNT',
    'RChain': 'RHOC',
    'Maker': 'MKR',
    'DogeCoin': 'DOGE',
    'Bitshares': 'BTS',
    'Decred': 'DCR',
    'Aeternity': 'AE',
    'Waltonchain': 'WTC',
    'Augur': 'REP',
    'Electroneum': 'ETN',
    '0x': 'ZRX',
    'Komodo': 'KMD',
    'Bytom': 'BTM',
    'ARK': 'ARK',
    'Veritaseum': 'VERI',
    'Ardor': 'ARDR',
    'Golem': 'GNT',
    'Dragonchain': 'DRGN',
    'Hshare': 'HSR',
    'BAT': 'BAT',
    'Cryptonex': 'CNX',
    'SysCoin': 'SYS',
    'Zilliqa': 'ZIL',
    'KuCoin': 'KCS',
    'DigiByte': 'DGB',
    'Ethos': 'BQX',
    'Gas': 'GAS'
  };
  
  getSymbolNames() {
    for (let name in this.symbolnameData) {
      this.symbols.push(this.symbolnameData[name])
    }
    // console.log(this.symbols)
    return this.symbols
  }

  getPortfolioValues(input) {
    console.log(input)
    for (let item in input) {
      this.portSyms.push(item)
      this.symPrice.push(input[item].USD)
    }
    
    console.log(this.portSyms)
    console.log(this.symPrice)
    // console.log(this.portSyms)
    // return this.portSyms
  }

  // coinlist(): Observable<coinModel[]> {
  //   return this.http.get<coinModel[]>(this.allUrl)
  // }

}
