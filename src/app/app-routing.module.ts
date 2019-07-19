import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignuppComponent } from './signupp/signupp.component';
import { AuthGuardService as AuthGuard } from './auth-guard.service'
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component'
export const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignuppComponent},
  // {path: "", component: NavbarComponent, canActivate: [AuthGuard]}
<<<<<<< HEAD
  // {path: "portfolio", component: PortfolioComponent, canActivate: [AuthGuard]}
=======
  {path: "portfolio", component: PortfolioComponent, canActivate: [AuthGuard]}
>>>>>>> bfc27d7a8cd0558d738f275066b28f09b842b2c8
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
