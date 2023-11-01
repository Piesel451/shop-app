import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAuthenticatedCartComponent } from './non-authenticated-cart.component';

describe('NonAuthenticatedCartComponent', () => {
  let component: NonAuthenticatedCartComponent;
  let fixture: ComponentFixture<NonAuthenticatedCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonAuthenticatedCartComponent]
    });
    fixture = TestBed.createComponent(NonAuthenticatedCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
