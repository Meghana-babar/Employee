import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleslotchildComponent } from './singleslotchild.component';

describe('SingleslotchildComponent', () => {
  let component: SingleslotchildComponent;
  let fixture: ComponentFixture<SingleslotchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleslotchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleslotchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
