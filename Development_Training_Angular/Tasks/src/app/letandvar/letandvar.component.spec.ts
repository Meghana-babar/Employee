import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetandvarComponent } from './letandvar.component';

describe('LetandvarComponent', () => {
  let component: LetandvarComponent;
  let fixture: ComponentFixture<LetandvarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetandvarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetandvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
