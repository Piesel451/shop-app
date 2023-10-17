import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricPianosComponent } from './electric-pianos.component';

describe('ElectricPianosComponent', () => {
  let component: ElectricPianosComponent;
  let fixture: ComponentFixture<ElectricPianosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectricPianosComponent]
    });
    fixture = TestBed.createComponent(ElectricPianosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
