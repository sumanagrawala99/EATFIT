import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AutocompleteSearchComponent } from './autocomplete-search/autocomplete-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MyFatSecretComponent } from './my-fat-secret/my-fat-secret.component';
import { SidenavComponent } from './navbar/sidenav/sidenav.component';
import { ToolbarComponent } from './navbar/toolbar/toolbar.component';
import { FoodsComponent } from './foods/foods.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { FitnessComponent } from './fitness/fitness.component';
import { CommunityComponent } from './community/community.component';
import { NavtabsComponent } from './navbar/navtabs/navtabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';
import { SignupComponent } from './signup/signup.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AutocompleteSearchComponent,
    MyFatSecretComponent,
    SidenavComponent,
    ToolbarComponent,
    FoodsComponent,
    RecipesComponent,
    ChallengesComponent,
    FitnessComponent,
    CommunityComponent,
    NavtabsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatAutocompleteModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule,
    MatTooltipModule,
    MatTabsModule,
    MatBadgeModule,
    MatCardModule,
    MatButtonToggleModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
