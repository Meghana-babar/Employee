import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentprojparentComponent } from './contentprojparent.component';

describe('ContentprojparentComponent', () => {
  let component: ContentprojparentComponent;
  let fixture: ComponentFixture<ContentprojparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentprojparentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentprojparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
