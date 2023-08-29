import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpFComponent } from './emp-f.component';

describe('EmpFComponent', () => {
  let component: EmpFComponent;
  let fixture: ComponentFixture<EmpFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpFComponent]
    });
    fixture = TestBed.createComponent(EmpFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
