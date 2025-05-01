import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormHeaderComponent } from './login-form-header.component';

describe('LoginFormHeaderComponent', () => {
  let component: LoginFormHeaderComponent;
  let fixture: ComponentFixture<LoginFormHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFormHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFormHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
