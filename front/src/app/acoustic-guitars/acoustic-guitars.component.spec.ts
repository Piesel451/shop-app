import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcousticGuitarsComponent } from './acoustic-guitars.component';

describe('AcousticGuitarsComponent', () => {
  let component: AcousticGuitarsComponent;
  let fixture: ComponentFixture<AcousticGuitarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcousticGuitarsComponent]
    });
    fixture = TestBed.createComponent(AcousticGuitarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
