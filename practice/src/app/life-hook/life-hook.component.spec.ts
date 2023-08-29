import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeHookComponent } from './life-hook.component';

describe('LifeHookComponent', () => {
  let component: LifeHookComponent;
  let fixture: ComponentFixture<LifeHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeHookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
