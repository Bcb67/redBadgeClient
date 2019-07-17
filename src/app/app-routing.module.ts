import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignuppComponent } from './signupp/signupp.component';
const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignuppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
