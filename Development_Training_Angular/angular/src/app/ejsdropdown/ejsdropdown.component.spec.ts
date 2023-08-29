import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjsdropdownComponent } from './ejsdropdown.component';

describe('EjsdropdownComponent', () => {
  let component: EjsdropdownComponent;
  let fixture: ComponentFixture<EjsdropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjsdropdownComponent]
    });
    fixture = TestBed.createComponent(EjsdropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
