import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule, MatTableModule, MatSortModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxSpinnerModule } from "ngx-spinner";
import { StockFetchComponent } from './stock-fetch/stock-fetch.component';
import { HttpClientModule } from '@angular/common/http'
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignuppComponent } from './signupp/signupp.component';
import {MatInputModule} from '@angular/material/input';

import { CryptoTableComponent } from './crypto-table/crypto-table.component';
import { TopCoinService } from './top-coin.service'
import { ReactiveFormsModule } from '@angular/forms'
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthGuardService} from './auth-guard.service';
import { AuthService } from './auth.service';
// import { PortfolioComponent } from './portfolio/portfolio.component';
import { LandingComponent } from './landing/landing.component';
import { TopCoinsComponent } from './top-coins/top-coins.component';


@NgModule({
  declarations: [
    AppComponent,
    StockFetchComponent,
    NavbarComponent,
    LoginComponent,
    SignuppComponent,
    CryptoTableComponent,
    // PortfolioComponent,
    LandingComponent,
    TopCoinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    NgxSpinnerModule
  ],
  providers: [ AuthGuardService, AuthService, TopCoinService, JwtHelperService,{provide:JWT_OPTIONS,useValue:JWT_OPTIONS}],
  bootstrap: [AppComponent]
})
export class AppModule { }