import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
lstoggle= true
  toggle(){
  if (this.lstoggle) {
    this.lstoggle = false;
  } else {
    this.lstoggle = true
  }
}
  constructor() { }

  ngOnInit() {
  }

}
