import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FoodsComponent } from './foods/foods.component';


import { MatDatepickerModule } from '@angular/material/datepicker';
import { NavBarModule } from './navbar/navbar.module';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthGuard } from './_helper/auth.guard';
import { AuthService } from './_services/auth.service';
import { TokenInterceptorService } from './_services/token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    FoodsComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NavBarModule
  ],
  providers: [AuthService, AuthGuard,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true},MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
