import { Component, OnInit } from '@angular/core';
import { UserCoins } from '../models/getUserCoins'
import { UserPortfolioService } from '../user-portfolio.service'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  
  constructor( private dataService : UserPortfolioService) { }

  userCoins : UserCoins[] = []


  ngOnInit() {
    this.dataService.getUserPortfolio().subscribe((res : UserCoins)=>{
    //   this.userCoins = res;console.log(this.userCoins)
    })
  }

}
