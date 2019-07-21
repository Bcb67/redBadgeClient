import { Component } from '@angular/core';
import { DatabaseService } from './stock-fetch.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redBadgeClient';

  constructor(private dbService: DatabaseService) {}
  ngOnInit() {
    localStorage.setItem("token", '')
    this.dbService.getTop24hr()
  }
}
