import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DialogAnimationExampleComponent } from "./dialog-animation-example/dialog-animation-example.component";
import { RecipesComponent } from "./recipes.component";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import {MatDialogModule} from '@angular/material/dialog';
import { RecipeRoutingModule } from "./recipe-routing.module";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  imports: [
      CommonModule,
      RecipeRoutingModule,
      MatFormFieldModule,
      MatCardModule,
      MatSelectModule,
      FlexLayoutModule,
      ReactiveFormsModule,
      RouterModule,
      MatDialogModule,
      MatButtonModule
  ],
  declarations: [
     RecipesComponent,
     DialogAnimationExampleComponent
  ]
})
export class RecipeModule{

}