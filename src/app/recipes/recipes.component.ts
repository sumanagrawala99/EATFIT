import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Receipe } from '../_modals/receipe.model';
import { RecipeService } from '../_services/recipe.service';
import { DialogAnimationExampleComponent } from './dialog-animation-example/dialog-animation-example.component';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  ngOnInit(): void {
    
  }

  status='';
   recipes: Receipe[];
   searchName: string ='';
   recipetype:string='';
   recipesTypes:any
  textHead='Recently Popular Recipes';

  constructor( public dialog: MatDialog,private recipeService:RecipeService){
          this.getRecipes(this.searchName,this.recipetype);
          this.getRecipeTypes();
   
    }

   getRecipes(searchText:string,recipetype:string){
      this.recipeService.getRecipes(searchText,recipetype).subscribe((data :Receipe[]) =>{
          this.recipes = data;
          console.log(this.recipes);
      } )
        
  }

  getRecipeTypes(){
    this.recipeService.getRecipesTypes().subscribe((data) =>{
      console.log(data);
      this.recipesTypes=data;
  } )
  }
  form = new FormGroup({  
    searchText : new FormControl()
  }); 

  searchForm()  
  {  
    this.status='';
      this.searchName = this.SearchText?.value;
      this.textHead=`${this.searchName} Receipes`
      if(this.searchName!=""){
        this.getRecipes(this.searchName,'');
      }
    
  }

  getRecipesByType(recipeType:string){
    if(recipeType!== undefined){
      this.status=recipeType;
      console.log(recipeType);
      this.getRecipes('',recipeType);
      this.recipetype=recipeType;
      this.textHead=`${recipeType} Recipes`;
    }else{
      this.getRecipes('','');
      this.textHead=`Recently Popular Recipes`;
    }
    
  }

  get SearchText()  
  {  
    return this.form.get('searchText');  
  }  


  openDialog(enterAnimationDuration: string, exitAnimationDuration: string,receipeId:string) {
    this.recipeService.getRecipeDetails(receipeId).subscribe((data) =>{
       let value=  JSON.stringify(data);
         let response= JSON.parse(value);
          if(response!=undefined){ 
            this.dialog.open(DialogAnimationExampleComponent, {
                    width: '50vw',
                     maxWidth: '50vw',
                     enterAnimationDuration,
                     exitAnimationDuration,
                     data: {
                      receipe: response
                    }
                 });
          }
       } )
  }

}
