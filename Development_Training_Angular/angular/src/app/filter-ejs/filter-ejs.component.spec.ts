import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterEjsComponent } from './filter-ejs.component';

describe('FilterEjsComponent', () => {
  let component: FilterEjsComponent;
  let fixture: ComponentFixture<FilterEjsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterEjsComponent]
    });
    fixture = TestBed.createComponent(FilterEjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
