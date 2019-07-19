import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

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
  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }
  onSubmit() {
    let login = {user:{ username: this.loginForm.value.username, password: this.loginForm.value.password }}
<<<<<<< HEAD
    this.authservice.loginUser(login).subscribe(data => localStorage.setItem('token',data.sessionToken))
    
    if(true){
      alert('you are logged in!!')

    }
    else {
      alert('you failed.. idiot!!!')
    }
    // console.log(login)
=======
    this.authservice.loginUser(login).subscribe(data => {localStorage.setItem('token',data.sessionToken);this.goProfile()})
>>>>>>> bfc27d7a8cd0558d738f275066b28f09b842b2c8
  }
  goProfile() {
    if(localStorage.getItem('token')){
      alert('YOU LOGGED IN');

    }else if(!localStorage.getItem('token')) {
      alert('WRONG CREDENTIALS CUZ')
    }
  }
}
