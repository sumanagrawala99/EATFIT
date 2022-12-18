import { AfterContentChecked, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/_modals/user';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit,AfterContentChecked {

  user: User;
  username: string;
  constructor(private authservice: AuthService) {
    this.authservice.user.subscribe(x => this.user = x);

  }
  ngAfterContentChecked(): void {
    this.username = JSON.parse(this.authservice.getUserName());
  }

  ngOnInit(): void {
   
  }

  @Output() SideNavToggle = new EventEmitter();

  openSidenav() {
    this.SideNavToggle.emit();
  }
  logout() {
    this.authservice.logout();
  }



}
