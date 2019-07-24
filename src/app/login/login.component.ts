import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserPortfolioService } from '../user-portfolio.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm = new FormGroup ({
    username: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private authservice: AuthService, private portfolioService: UserPortfolioService) { }

  ngOnInit() {
  }
  onSubmit() {
    let login = {user:{ username: this.loginForm.value.username, password: this.loginForm.value.password }}
    //this.authservice.loginUser(login).subscribe(data => {localStorage.setItem('token',data.sessionToken);this.goProfile(); this.portfolioService.id=data.user.id})
    this.authservice.loginUser(login).subscribe(data => {localStorage.setItem('token',data.sessionToken);this.authservice.currentID= data.user.id;this.goProfile()})
  }
  goProfile() {
    if(localStorage.getItem('token')){
      alert('YOU LOGGED IN');

    }else if(!localStorage.getItem('token')) {
      alert('WRONG CREDENTIALS CUZ')
    }
  }
}


