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
  
  constructor(private http: HttpClient) { }
  
  baseurl = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms='
  // BTC,ETH&tsyms=USD,EUR'
  
  url: any;
  display: any;
  portSyms = [];
  portQuan = [];
  symPrice = [];
  symbols = [];
  coins = [];
  retVal = [];
  pls = true;

  firstTime = true;

  dailyData: any;

  fetchSymbolInfo(input) {
    // console.log('names: ', this.names)
    this.url = this.baseurl + input + '&tsyms=USD'
    this.http.get(this.url).subscribe((dat: any) => {this.display = dat})
    // console.log(this.display)
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
    'Gas': 'GAS',
  };
  
  getCoinNames() {
    this.coins = [];
    for (let name in this.symbolnameData) {
      this.coins.push(name)
    }
    // console.log(this.symbols)
    return this.coins
  }

  getSymbolNames() {
    this.symbols = [];
    for (let name in this.symbolnameData) {
      this.symbols.push(this.symbolnameData[name])
    }
    // console.log(this.symbols)
    return this.symbols
  }

  getObject() {
    // this.retVal = [];
    
    if(this.pls){
      for(let i = 0; i < this.portSyms.length; i++) {
        this.retVal.push({name: this.coins[i], symbol: this.portSyms[i], price: this.symPrice[i], quantity: 0})
      }
    }
    this.pls = false
    console.log(this.retVal)
    return this.retVal;
  }

  getTop24hr() {
    // let top24hr = {};
    this.http.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD').subscribe(data => {
      // console.log('fetchService:',data.Data);
      // this.dailyData = data.Data;
    })
    return this.dailyData
    // console.log(top24hr);
  }

  getPortfolioValues(input) {
    this.portSyms = [];
    this.symPrice = [];
    // console.log(input)
    for (let item in input) {
      this.portSyms.push(item)
      this.symPrice.push(input[item].USD)
    }
    // console.log({
    //   portSyms: this.portSyms,
    //   symPrice: this.symPrice
    // })
    return {
      portSyms: this.portSyms,
      symPrice: this.symPrice
    }
    // console.log('portSyms:',this.portSyms)
    // console.log('symPrice:',this.symPrice)
    // console.log(this.portSyms)
    // return this.portSyms
  }

  // coinlist(): Observable<coinModel[]> {
  //   return this.http.get<coinModel[]>(this.allUrl)
  // }

}
