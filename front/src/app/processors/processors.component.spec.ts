import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessorsComponent } from './processors.component';

describe('ProcessorsComponent', () => {
  let component: ProcessorsComponent;
  let fixture: ComponentFixture<ProcessorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessorsComponent]
    });
    fixture = TestBed.createComponent(ProcessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
