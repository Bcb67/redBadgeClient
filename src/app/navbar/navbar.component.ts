import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  val = this.authservice.suli;
  constructor(private authservice: AuthService) { }

  ngOnInit() {
    this.val = this.authservice.suli;
  }
  logout() {
    localStorage.removeItem('token');
  }
  buttonTest() {
    this.val = !this.authservice.suli;
    this.authservice.suli = this.val;
  }
}
