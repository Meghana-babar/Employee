import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipcompComponent } from './pipcomp.component';

describe('PipcompComponent', () => {
  let component: PipcompComponent;
  let fixture: ComponentFixture<PipcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipcompComponent]
    });
    fixture = TestBed.createComponent(PipcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
