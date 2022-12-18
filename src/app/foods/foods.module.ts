import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FoodsRoutingModule } from "./foods-routing.module";
import { FoodsComponent } from "./foods.component";
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
      CommonModule,
    FoodsRoutingModule,
    MatCardModule
      
  ],
  declarations: [
    FoodsComponent
  ]
})
export class FoodsModule{

}