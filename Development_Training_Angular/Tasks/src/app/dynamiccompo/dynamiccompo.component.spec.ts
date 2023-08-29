import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiccompoComponent } from './dynamiccompo.component';

describe('DynamiccompoComponent', () => {
  let component: DynamiccompoComponent;
  let fixture: ComponentFixture<DynamiccompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamiccompoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamiccompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
