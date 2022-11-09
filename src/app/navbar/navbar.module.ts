import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';

import { NavbarComponent } from './navbar.component';
import { NavtabsComponent } from './navtabs/navtabs.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatAutocompleteModule,
        MatSidenavModule,
        RouterModule,
        MatIconModule,
        MatListModule,
        ReactiveFormsModule,
        RouterModule,
        MatTabsModule
    ],
    declarations: [
        NavbarComponent,
        SidenavComponent,
        ToolbarComponent,
        NavtabsComponent
    ],
    exports:[
        NavbarComponent,
        SidenavComponent,
        ToolbarComponent,
        NavtabsComponent
    ],
})
export class NavBarModule { }