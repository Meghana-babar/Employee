import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamiccompo1Component } from './dynamiccompo1.component';

describe('Dynamiccompo1Component', () => {
  let component: Dynamiccompo1Component;
  let fixture: ComponentFixture<Dynamiccompo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dynamiccompo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dynamiccompo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
