import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertService } from '../../_services/alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    
    
  form: FormGroup;
    loading = false;
    submitted = false;
    activityTypes:any;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private service: AuthService,
        private alertService: AlertService,
        private ngbDateParserFormatter: NgbDateParserFormatter
    ) { }

    ngOnInit() {
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

   
    get f() { return this.form.controls; }

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
        this.service.register(formValues)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', '');
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error => {
                    this.alertService.error(error,'');
                    this.loading = false;
                });
    }

    getActivityType(){
        this.service.getActivityType().subscribe((data) =>{
          this.activityTypes=data;
      } )
      }
}
