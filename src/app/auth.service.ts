import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authCards= true
  toggle(lstoggle){
  if (lstoggle) {
    this.authCards= false;
    console.log(false)
  } else {
    this.authCards = true
    console.log(true)
  }
}

  constructor() { }
}
