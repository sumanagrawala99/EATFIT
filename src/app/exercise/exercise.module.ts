import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { AddExerciseComponent } from "./add-exercise/add-exercise.component";
import { ExerciseRoutingModule } from "./exercise-routing.module";

@NgModule({
  imports: [
      CommonModule,
      ExerciseRoutingModule,
      MatCardModule
      
  ],
  declarations: [
    AddExerciseComponent
  ]
})
export class ExerciseModule{

}