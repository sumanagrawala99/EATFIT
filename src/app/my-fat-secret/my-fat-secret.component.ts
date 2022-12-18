import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';
import { food } from '../_modals/food.model';
import { FoodService } from '../_services/food.service';
import { NavbarService } from '../_services/navbar.service';


@Component({
  selector: 'app-my-fat-secret',
  templateUrl: './my-fat-secret.component.html',
  styleUrls: ['./my-fat-secret.component.css']
})
export class MyFatSecretComponent implements OnInit {

  displayedColumns: string[] = [ 'foodname', 'foodtype', 'url'];
  dataSource:any;
  mealList:FoodItemTyepe[];
   today = new Date();
   date = new FormControl(new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate()));
   dateToDB = moment(this.date.value).format("YYYY-MM-DD");
   macroNutrions:any;
   carbsPerc:number;
   fatPerc:number;
   proteinPerc:number;
   spinnerPercentage:number;
   
  
  constructor(private service:FoodService,private nav:NavbarService) { 
  }

  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
    var dateToDB = moment(event.value).format("YYYY-MM-DD");
    this.dateToDB=dateToDB;
    this.getFoodItemType(dateToDB);
    this.getMacroNutrients(dateToDB);
  }

  ngOnInit(): void {
    this.nav.show();
    this.getFoodItemType(this.dateToDB);
    this.getMacroNutrients(this.dateToDB);
  }

  getMacroNutrients(date:any){
    this.service.getMacroNutrients(date).subscribe((response: any) => { 
      //console.log(response);
      this.macroNutrions=response;
      this.carbsPerc=(response.sumOfCarbs * 100)/response.carbsReq;
      this.fatPerc=(response.sumOfFat * 100)/response.fatReq;
      this.proteinPerc=(response.sumOfProtein * 100)/response.proteinReq;
      this.spinnerPercentage=Math.round((response.dailyKcalConsumed * 100)/response.dailyKcalGoal);
    });
  }

  doSomething(val: string){
    let foodTypeId = parseInt(val);
    this.service.setFoodTypeId(foodTypeId);
  }

  getFoodItemType(date:any){
  this.service.getFoodItemType(date).subscribe((response: any) => { 
    this.mealList =response
   // console.log(this.mealList);
     });
  }

  deleteItem(item:string){
    console.log(item);
   this.service.deleteFoodItem(item).subscribe(()=>{
    this.getFoodItemType(this.dateToDB);
    this.getMacroNutrients(this.dateToDB);
  });
  }

  
}

export interface FoodItemTyepe {
  foodTypeId: number
  foodItemType: string;
  foodList:food[];
}
