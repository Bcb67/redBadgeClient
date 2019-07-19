import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 constructor(private authservice: AuthService) { }

  ngOnInit() {
  }
<<<<<<< HEAD

  logout() {
    localStorage.removeItem('token')
  }

=======
  logout() {
    localStorage.removeItem('token');
  }
>>>>>>> bfc27d7a8cd0558d738f275066b28f09b842b2c8
}
