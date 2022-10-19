import { Component, OnInit } from '@angular/core';
import { NavItem } from '../nav-item';

@Component({
  selector: 'app-navtabs',
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.css']
})
export class NavtabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuItem: NavItem [] = [
    {
      displayName: 'MyFatSecret',
      iconName: 'description',
      route: '/myfatsecret',
    },        
    {
      displayName: 'Foods',
      iconName: 'restaurant',
      route: 'foods',
    },
    {
      displayName: 'Recipes',
      iconName: 'local_dining',          
      route: 'recipes',
    },
    {
      displayName: 'Challenges',
      iconName: 'event_note',
      route: 'challenges',
    },
    {
      displayName: 'Fitness',
      iconName: 'fitness_center',
      route: 'fitness',
    },
    {
      displayName: 'Community',
      iconName: 'group',
      route: 'community',
    }
  ];


}
