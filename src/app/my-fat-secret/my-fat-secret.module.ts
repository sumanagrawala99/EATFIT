import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {  ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { AddItemCardComponent } from "./add-item-card/add-item-card.component";
import { MaterialElevationDirective } from "./add-item-card/material-evalation.directive";
import { DialogComponent } from "./dialog/dialog.component";
import { MyFatSecretRoutingModule } from "./my-fat-secret-routing.module";
import { MyFatSecretComponent } from "./my-fat-secret.component";
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  imports: [
      CommonModule,
      MyFatSecretRoutingModule,
      MatIconModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatFormFieldModule,
      MatCheckboxModule,
      MatDialogModule,
      MatPaginatorModule,
      MatTableModule,
      ReactiveFormsModule,
      MatCardModule,
      MatInputModule,
      MatButtonModule
  ],
  declarations: [
     MyFatSecretComponent,
     AddItemCardComponent,
     DialogComponent,
     MaterialElevationDirective
  ]
})
export class MyFatSecretModule{

}