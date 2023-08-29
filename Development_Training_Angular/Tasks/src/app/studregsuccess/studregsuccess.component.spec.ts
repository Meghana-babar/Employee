import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudregsuccessComponent } from './studregsuccess.component';

describe('StudregsuccessComponent', () => {
  let component: StudregsuccessComponent;
  let fixture: ComponentFixture<StudregsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudregsuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudregsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
