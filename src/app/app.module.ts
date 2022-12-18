import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarModule } from './navbar/navbar.module';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthGuard } from './_helper/auth.guard';
import { AuthService } from './_services/auth.service';
import { TokenInterceptorService } from './_services/token-interceptor.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { AlertModule } from './alert/alert.module';


@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NavBarModule,
    NgbModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    AlertModule
  ],
  providers: [AuthService, AuthGuard,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true},MatDatepickerModule,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
