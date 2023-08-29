import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildviewchildComponent } from './childviewchild.component';

describe('ChildviewchildComponent', () => {
  let component: ChildviewchildComponent;
  let fixture: ComponentFixture<ChildviewchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildviewchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildviewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
