import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandyComponent } from './candy.component';

describe('CandyComponent', () => {
  let component: CandyComponent;
  let fixture: ComponentFixture<CandyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandyComponent]
    });
    fixture = TestBed.createComponent(CandyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
