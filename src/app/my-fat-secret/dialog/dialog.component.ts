import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { food } from '../../_modals/food.model';
import { FoodService } from '../../_services/food.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls:[
    "./dialog.component.css"
  ]
})
export class DialogComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['select',  'name', 'description'];
  dataSource= new MatTableDataSource<food>();
  selection = new SelectionModel<food>(true, []);
  searchName: any;
 
  constructor(private foodService: FoodService,private router:Router) {
   }

  ngOnInit(): void {
   
  }

  form = new FormGroup({  
    searchText : new FormControl()
  });  

  getData()  
  {  
      let response = this.foodService.getData(this.searchName);
      if(response !== undefined){
        response.subscribe(  
          (data :food[]) =>{
            this.dataSource = new MatTableDataSource<food>(data);
            this.dataSource.paginator = this.paginator;
          }
        ); 
      }  
  }  
  
  searchForm()  
  {  
      this.searchName = this.SearchText?.value;
      if(this.searchName!=""){
        this.getData();  
      }
    
  }
  
  
  get SearchText()  
  {  
    return this.form.get('searchText');  
  }  


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach((row: food) => this.selection.select(row));
  }

  onSelectToggle(food:food){
      this.selection.toggle(food);
  }


  submitForm(){
    let selectedVal = this.selection.selected;
    let data = selectedVal.map(t=>t.foodId);
     this.foodService.setFoodDetails(data).subscribe((response: any) => { 
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/myEatFit']);
    });

  }
}
