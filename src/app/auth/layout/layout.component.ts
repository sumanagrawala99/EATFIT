import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

      constructor(
        private router: Router,
        private service: AuthService
    ) {
        // redirect to home if already logged in
        if (this.service.user) {
            this.router.navigate(['/']);
        }
    }

  ngOnInit(): void {
  }

}
