import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynthesizersComponent } from './synthesizers.component';

describe('SynthesizersComponent', () => {
  let component: SynthesizersComponent;
  let fixture: ComponentFixture<SynthesizersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SynthesizersComponent]
    });
    fixture = TestBed.createComponent(SynthesizersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
