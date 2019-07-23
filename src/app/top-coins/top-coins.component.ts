import { Component, OnInit } from '@angular/core';
import { Data } from '../models/DataModel'
import { TopCoinService } from '../top-coin.service'

@Component({
  selector: 'app-top-coins',
  templateUrl: './top-coins.component.html',
  styleUrls: ['./top-coins.component.css']
})
export class TopCoinsComponent implements OnInit {
  
  constructor( private dataService : TopCoinService) { }

  data : Data[] = []


  ngOnInit() {
    this.dataService.getTopCoins().subscribe((res : Data[])=>{
      this.data = res;console.log(this.data)
    })
  }

}
