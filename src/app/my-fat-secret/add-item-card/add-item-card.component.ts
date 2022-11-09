import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { food } from '../../_modals/food.model';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-add-item-card',
  templateUrl: './add-item-card.component.html',
  styleUrls: ['./add-item-card.component.css']
})
export class AddItemCardComponent implements OnInit {
 
  
  constructor(public dialog: MatDialog) {
   }

   defaultElevation = 2;
   raisedElevation:number = 8;
 
  foodItemList:food[];
  ngOnInit(): void {
   
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'app-dialog'
    });
  }

    
  
   
 
}
