import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserAccountRoutingModule } from './user-account-routing.module';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UserAccountRoutingModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        NgbModule,
        MatSelectModule
    ],
    declarations: [
        LayoutComponent,
        LoginComponent,
        SignupComponent
    ]
})
export class UserAccountModule { }