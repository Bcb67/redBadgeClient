import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card'
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {
  username: string
  coins: number


  portGet= {}
  constructor(
    private authservice: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.authservice.getUser().subscribe(info=>{
      console.log("user", info)
      this.username = info[0].username
      this.coins = info[0].Portfolio.coins
      console.log('UN', this.username)
      console.log(this.coins)
    })
  }
  
}
