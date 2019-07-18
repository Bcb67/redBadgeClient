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
import { StockFetchComponent } from './stock-fetch/stock-fetch.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'


import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignuppComponent } from './signupp/signupp.component';
import { CryptoTableComponent } from './crypto-table/crypto-table.component';

@NgModule({
  declarations: [
    AppComponent,
    StockFetchComponent,
    NavbarComponent,
    LoginComponent,
    SignuppComponent,
    CryptoTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }