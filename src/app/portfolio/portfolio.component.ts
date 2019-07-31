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
  
  portfolio:[]
  
  username: string
  coins: []
  quans:[]
  
  
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
      this.quans = info[0].Portfolio.quantity
      console.log('UN', this.username)
      console.log('coins',this.coins)
      console.log('quans', this.quans)
    })
  }
}
