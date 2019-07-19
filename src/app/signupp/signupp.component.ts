import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service'
@Component({
  selector: 'app-signupp',
  templateUrl: './signupp.component.html',
  styleUrls: ['./signupp.component.css']
})
export class SignuppComponent implements OnInit {
  submitted = false;
  signupForm = new FormGroup({
    username: new FormControl(''),
    fName: new FormControl(''),
    lName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    let user = {user:{ username: this.signupForm.value.username, fName: this.signupForm.value.fName, lName: this.signupForm.value.lName, email: this.signupForm.value.email, password: this.signupForm.value.password }}
    this.authservice.addUser(user).subscribe(data =>
<<<<<<< HEAD
      localStorage.setItem('token', data.sessionToken))
=======
    localStorage.setItem('token', data.sessionToken))
    alert('Created New User!')
>>>>>>> bfc27d7a8cd0558d738f275066b28f09b842b2c8
    console.log(user)
  }
  
}
