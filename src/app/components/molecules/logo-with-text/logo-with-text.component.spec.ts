import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoWithTextComponent } from './logo-with-text.component';

describe('LogoWithTextComponent', () => {
  let component: LogoWithTextComponent;
  let fixture: ComponentFixture<LogoWithTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoWithTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
