import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RecipeService } from '../../_services/recipe.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-animation-example',
  templateUrl: './dialog-animation-example.component.html',
  styleUrls: ['./dialog-animation-example.component.css']
})
export class DialogAnimationExampleComponent implements OnInit {

  recipeDetails:any
  directions:any;
  ingredients:any;
  recipe_image:string;

  constructor(public dialogRef: MatDialogRef<DialogAnimationExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.recipeDetails=this.data.receipe;
  }
  ngOnInit(): void {
    
  }

}
