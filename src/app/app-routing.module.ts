import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignuppComponent } from './signupp/signupp.component';
import { AuthGuardService as AuthGuard } from './auth-guard.service'
// import { PortfolioComponent } from './portfolio/portfolio.component'
import { LandingComponent } from './landing/landing.component';
export const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignuppComponent},
  {path: "", component: LandingComponent},
  // {path: "portfolio", component: PortfolioComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
