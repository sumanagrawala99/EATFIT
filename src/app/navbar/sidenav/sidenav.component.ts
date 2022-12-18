import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavItem } from '../../_modals/nav-item';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output() closeSideNav = new EventEmitter();

  constructor() { }

   onToggleClose() {
    this.closeSideNav.emit();
}

  ngOnInit() {
  }

  menuItem: NavItem [] = [
   
    {
      displayName: 'Notifications',
      iconName: 'notifications',          
      route: 'notifications',
    },
    {
      displayName: 'Diet_Calender',
      iconName: 'calendar_today',          
      route: 'calender',
    }
  ];

}
