import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class TopCoinService {
  


  constructor(private http: HttpClient) { }

  baseurl = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=6&tsym=USD'
  
  url: any;
  display: any;
  
  fetchTopCoins() {
    this.http.get(this.baseurl).subscribe((dat: any) => {this.display = dat; console.log('display:', this.display)})
    console.log(this.display)
    return this.display
  }
 
}
