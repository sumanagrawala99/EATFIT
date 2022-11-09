import { Component, OnInit } from '@angular/core';
import { JwtClientService } from './_services/jwt-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(){
  }
  ngOnInit(): void {
  }
  title = 'EatFit_diet';
}
