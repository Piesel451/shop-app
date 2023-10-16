import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicGuitarsComponent } from './classic-guitars.component';

describe('ClassicGuitarsComponent', () => {
  let component: ClassicGuitarsComponent;
  let fixture: ComponentFixture<ClassicGuitarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassicGuitarsComponent]
    });
    fixture = TestBed.createComponent(ClassicGuitarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
