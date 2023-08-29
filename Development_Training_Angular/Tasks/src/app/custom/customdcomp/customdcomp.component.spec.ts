import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomdcompComponent } from './customdcomp.component';

describe('CustomdcompComponent', () => {
  let component: CustomdcompComponent;
  let fixture: ComponentFixture<CustomdcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomdcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomdcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
