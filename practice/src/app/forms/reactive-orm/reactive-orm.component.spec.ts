import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveOrmComponent } from './reactive-orm.component';

describe('ReactiveOrmComponent', () => {
  let component: ReactiveOrmComponent;
  let fixture: ComponentFixture<ReactiveOrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveOrmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveOrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
