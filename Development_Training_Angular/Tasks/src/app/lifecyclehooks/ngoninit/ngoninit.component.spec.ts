import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoninitComponent } from './ngoninit.component';

describe('NgoninitComponent', () => {
  let component: NgoninitComponent;
  let fixture: ComponentFixture<NgoninitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoninitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgoninitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
