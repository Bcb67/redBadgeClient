import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../stock-fetch.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  isTrue:any;
  top10Growing: any;
  constructor(private dbService: DatabaseService) { }

  ngOnInit() {
    this.isTrue = this.dbService.getTop24hr()
    this.top10Growing = this.dbService.dailyData;
    console.log(this.top10Growing)
    // console.log(this.top10Growing)
  }

  setDisplay() {
    this.top10Growing = this.dbService.getTop24hr()
  }
}
