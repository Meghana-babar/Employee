import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleslotComponent } from './singleslot.component';

describe('SingleslotComponent', () => {
  let component: SingleslotComponent;
  let fixture: ComponentFixture<SingleslotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleslotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
