import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtcComponent } from './ptc.component';

describe('PtcComponent', () => {
  let component: PtcComponent;
  let fixture: ComponentFixture<PtcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PtcComponent]
    });
    fixture = TestBed.createComponent(PtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
