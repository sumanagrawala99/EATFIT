import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/_modals/user';
import { AuthService } from 'src/app/_services/auth.service';
import { NavbarService } from 'src/app/_services/navbar.service';
import { NavItem } from '../../_modals/nav-item';

@Component({
  selector: 'app-navtabs',
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.css']
})
export class NavtabsComponent implements OnInit {

  user: User;
  
  constructor(private authService: AuthService, public nav: NavbarService) {
    this.authService.user.subscribe(x => this.user = x);
   }

  ngOnInit(): void {
   
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
      displayName: 'Exercise',
      iconName: 'directions_run',
      route: '/exercise',
    },
  ];


}
