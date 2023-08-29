import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjsdialogComponent } from './ejsdialog.component';

describe('EjsdialogComponent', () => {
  let component: EjsdialogComponent;
  let fixture: ComponentFixture<EjsdialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjsdialogComponent]
    });
    fixture = TestBed.createComponent(EjsdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
