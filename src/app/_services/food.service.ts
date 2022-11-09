import { Injectable } from '@angular/core';  
import { HttpClient, HttpParams, } from '@angular/common/http';  
import { food } from '../_modals/food.model';
import { environment } from 'src/environments/environment';
  
@Injectable({  
  providedIn: 'root'  
})  
export class FoodService {  
  
  private baseUrl = environment.baseurl;  
   responseobj:any
   foodTypeId:number;
  status: string;
  errorMessage: any;
  date:string;

  constructor(private http : HttpClient) { }  
  
  getData(searchText : string)  
  {  
      let params = new HttpParams();
      params = params.append('foodName', searchText);
      this.responseobj= this.http.get<food[]>(`${this.baseUrl}/foodSearch`,  {params: params});
      return this.responseobj;
  }

  getFoodItemType(date:string){
    this.date = date;
    let params = new HttpParams();
    params = params.append('date', date);
     this.responseobj= this.http.get(`${this.baseUrl}/getFoodType`, {params: params});
    return this.responseobj;
  }
  
  setFoodDetails(ids : number[]){
    let reqdata= {
      "foodIds":ids,
      "foodTypeId":this.foodTypeId
    }
    let body = new FormData();
    body.append('foodDetails', JSON.stringify(reqdata));
    body.append("date",this.date);
   console.log(reqdata);
   return this.http.post(`${this.baseUrl}/saveFoodDetails`,body);
    
  }

  setFoodTypeId(foodTypeId:number){
    this.foodTypeId = foodTypeId;
  }

  deleteFoodItem(foodId:string){
   return this.http.delete(`${this.baseUrl}/deleteFoodDetails/${foodId}`);   
  }

  
}  