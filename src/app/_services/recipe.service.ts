import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Receipe } from '../_modals/receipe.model';


const baseUrl = environment.baseurl;

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  object:any
  recipes: Receipe[];

  
  
  constructor(private http: HttpClient) { 

  }

  getRecipes(searchText:string,recipetype:string){
    let params = new HttpParams();
    params = params.append('receipeName', searchText);
    params = params.append('recipType', recipetype);
    return this.http.get<Receipe[]>(`${baseUrl}/search/receipes`, {params: params});
  }

  getRecipesTypes(){
    return this.http.get(`${baseUrl}/recipeTypes`);
  }

  getRecipeDetails(receipeId:string){
  
    let params = new HttpParams();
    params = params.append('receipeId', receipeId);
    return this.http.get(`${baseUrl}/receipe`,  {params: params});
  
  }

  getReceipeDetailsObject(){
    return this.object;
  }

}
