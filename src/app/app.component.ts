import { Component, OnInit } from '@angular/core';
import { PositiionType } from './_modals/alert.modal';
import { AlertService } from './_services/alert.service';
import { AutoLogoutService } from './_services/auto-logout.service';
import { NavbarService } from './_services/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

   Position = PositiionType;

  constructor( private autoLogout: AutoLogoutService,private nav:NavbarService,private alertService: AlertService){
  }
  ngOnInit(): void {
    this.nav.show();
  }
  title = `EatFit_diet`;

  success(message: string, title: string) {
    this.alertService.success(message, title);
  }
}
