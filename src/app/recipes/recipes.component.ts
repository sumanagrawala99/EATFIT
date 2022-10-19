import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


const baseUrl = "https://www.themealdb.com/api/json/v1/1/"

//const baseUrl ="GET&https://platform.fatsecret.com/rest/server.api&method=recipes.get_favorites&oauth_consumer_key=98d0fff50f634835af88bff4eb574f12&oauth_nonce=1234&oauth_signature=sAyYTJiIxOGkvFpBcH8L%2BlFQRCQ%3D&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1245126631&oauth_version=1.0"

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {
  
  ngOnInit(): void {
  }

  categories: any[]

  constructor(private http: HttpClient, private router: Router){
  this.http.get(baseUrl + "categories.php").subscribe((res: any)=>{
      this.categories = res.categories
      this.categories.sort((cat1, cat2)=>cat1.strCategory.charCodeAt(0)-cat2.strCategory.charCodeAt(0))
    })
  }

  onCategoryClick(strCategory: string){
    this.router.navigateByUrl('/categories/' + strCategory)
  }

}
