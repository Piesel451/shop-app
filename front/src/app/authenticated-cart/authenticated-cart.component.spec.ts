import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatedCartComponent } from './authenticated-cart.component';

describe('AuthenticatedCartComponent', () => {
  let component: AuthenticatedCartComponent;
  let fixture: ComponentFixture<AuthenticatedCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthenticatedCartComponent]
    });
    fixture = TestBed.createComponent(AuthenticatedCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
