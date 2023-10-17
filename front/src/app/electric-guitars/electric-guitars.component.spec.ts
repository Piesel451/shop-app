import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricGuitarsComponent } from './electric-guitars.component';

describe('ElectricGuitarsComponent', () => {
  let component: ElectricGuitarsComponent;
  let fixture: ComponentFixture<ElectricGuitarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectricGuitarsComponent]
    });
    fixture = TestBed.createComponent(ElectricGuitarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
