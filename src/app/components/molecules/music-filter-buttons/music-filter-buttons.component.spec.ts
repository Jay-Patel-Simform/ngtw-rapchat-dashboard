import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicFilterButtonsComponent } from './music-filter-buttons.component';

describe('MusicFilterButtonsComponent', () => {
  let component: MusicFilterButtonsComponent;
  let fixture: ComponentFixture<MusicFilterButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicFilterButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicFilterButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
