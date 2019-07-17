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
    this.authservice.loginUser(login).subscribe(data => console.log(data))
    console.log(login)
  }
}


