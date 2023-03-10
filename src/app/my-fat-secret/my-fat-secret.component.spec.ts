import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFatSecretComponent } from './my-fat-secret.component';

describe('MyFatSecretComponent', () => {
  let component: MyFatSecretComponent;
  let fixture: ComponentFixture<MyFatSecretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      declarations: [ MyFatSecretComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFatSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
