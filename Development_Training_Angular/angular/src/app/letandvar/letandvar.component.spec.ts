import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetandvarComponent } from './letandvar.component';

describe('LetandvarComponent', () => {
  let component: LetandvarComponent;
  let fixture: ComponentFixture<LetandvarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LetandvarComponent]
    });
    fixture = TestBed.createComponent(LetandvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
