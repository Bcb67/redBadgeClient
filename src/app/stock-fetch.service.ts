import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  
  constructor(private http: HttpClient) { }
  
  baseurl = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms='
  
  url: any;
  display: any;
  portSyms = [];
  portQuan = [];
  symPrice = [];
  symbols = [];
  coins = [];
  retVal = [{name: 'BTC', symbol: 'BTC', price: 25, quantity: 0, userCost: 0}];
  pls = true;
  total: number
  firstTime = true;

  dailyData: any;

  fetchSymbolInfo(input) {
    this.url = this.baseurl + input + '&tsyms=USD'
    this.http.get(this.url).subscribe((dat: any) => {this.display = dat})
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
    'IOTA': 'MIOTA',
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
    return this.coins
  }

  getSymbolNames() {
    this.symbols = [];
    for (let name in this.symbolnameData) {
      this.symbols.push(this.symbolnameData[name])
    }
    return this.symbols
  }

  getObject() {
    this.retVal = []
    if(this.pls){
      for(let i = 0; i < this.portSyms.length; i++) {
        this.retVal.push({name: this.coins[i], symbol: this.portSyms[i], price: this.symPrice[i], quantity: 0, userCost: 0})
      }
    }
    this.pls = false
    console.log(this.retVal)
    return this.retVal;
  }

  getTop24hr() {
    this.http.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD').subscribe(data => {})
    return this.dailyData
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
}
