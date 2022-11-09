import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';
import { NavItem } from '../../_modals/nav-item';

@Component({
  selector: 'app-navtabs',
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.css']
})
export class NavtabsComponent implements OnInit {

  isAuthenticated = false;
  private userSub: Subscription;
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub= this.authService.userSubject.subscribe(data=>{
      this.isAuthenticated = !!data;
    });
  }

  menuItem: NavItem [] = [
    {
      displayName: 'My Diary',
      iconName: 'description',
      route: '/myEatFit',
    },        
    {
      displayName: 'Recipes',
      iconName: 'local_dining',          
      route: '/recipes',
    },
    {
      displayName: 'Foods',
      iconName: 'restaurant',
      route: 'foods',
    },
    {
      displayName: 'Meal Planner',
      iconName: 'restaurant',
      route: '/mealPlanner',
    },
  ];


}
