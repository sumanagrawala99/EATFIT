import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../_modals/user';
import { AlertService } from '../_services/alert.service';
import { AuthService } from '../_services/auth.service';
import { NavbarService } from '../_services/navbar.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  activityTypes:any;
  user:User;
  
  get f() { return this.form.controls; }

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: AuthService,
    private alertService: AlertService,
    private ngbDateParserFormatter: NgbDateParserFormatter,
    private nav:NavbarService,
    private authservice:AuthService,
    private datePipe: DatePipe
) { 
  
}


  ngOnInit(): void {
    this.nav.hide();
    this.authservice.userDetails().subscribe((response: any) => { 
      this.user=response;
      console.log(this.user)
      this.form.controls['firstName'].setValue(this.user.firstName); 
      this.form.controls['lastName'].setValue(this.user.lastName); 
      this.form.controls['username'].setValue(this.user.username); 
      this.form.controls['password'].setValue(this.user.password); 
      const [year, month, day] = this.datePipe.transform(this.user.dateOfBirth,"yyyy-MM-dd").split('-');
      const obj = { year: parseInt(year), month: parseInt(month), day: 
      parseInt(day.split(' ')[0].trim()) };
      this.form.controls['birthdate'].setValue(obj ); 
      this.form.controls['gender'].setValue(this.user.gender); 
      this.form.controls['height'].setValue(this.user.height); 
      this.form.controls['weight'].setValue(this.user.weight); 
      this.form.controls['activityId'].setValue(this.user.activityType.activityId); 
    });
    this.getActivityType();
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)],],
      birthdate:['',Validators.required],
      gender:['',Validators.required],
      height:['',Validators.required],
      weight:['',Validators.required],
      activityId:['',Validators.required]
  });
  }

  
   onSubmit() {
        this.submitted = true;
        this.alertService.clear();
        if (this.form.invalid) {
            return;
        }
        this.loading = true;
        let ngbDate = this.form.controls['birthdate'].value;
        let myDate = this.ngbDateParserFormatter.format(ngbDate)
        let formValues = this.form.value;
        formValues['birthdate'] = myDate;
       
        this.service.updateUser(formValues)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success('Update successful','');
                this.loading = false;
                //this.router.navigate(['../userprofile'], { relativeTo: this.route });
            },
            error => {
                this.alertService.error(error,'');
                this.loading = false;
            });
        
    }

    getActivityType(){
        this.service.getActivityType().subscribe((data) =>{
          console.log(data);
          this.activityTypes=data;
      } )
      }

}
