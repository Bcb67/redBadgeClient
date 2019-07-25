import { Component, OnInit } from '@angular/core';
import { UserCoins } from '../models/UserCoins'
import { UserPortfolioService } from '../user-portfolio.service'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {
  
  userCoins : UserCoins[] = []
  
  
  // ngOnInit() {
  //   this.dataService.getUserPortfolio().subscribe((res : UserCoins)=>{
  //     //   this.userCoins = res;console.log(this.userCoins)
  //   })
  // }
  
  username: string
  coins: number
  
  
  portGet= {}
  constructor(
    private authservice: AuthService,
    private router: Router,
    private dataService : UserPortfolioService) { }

  ngOnInit() {
    this.authservice.getUserCoins().subscribe(info=>{
      console.log("user", info)
      this.username = info[0].username
      this.coins = info[0].Portfolio.coins
      console.log('UN', this.username)
      console.log(this.coins)
    })
  }
}
