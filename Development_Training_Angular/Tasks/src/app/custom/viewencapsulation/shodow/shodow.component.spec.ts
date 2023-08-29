import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShodowComponent } from './shodow.component';

describe('ShodowComponent', () => {
  let component: ShodowComponent;
  let fixture: ComponentFixture<ShodowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShodowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShodowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
