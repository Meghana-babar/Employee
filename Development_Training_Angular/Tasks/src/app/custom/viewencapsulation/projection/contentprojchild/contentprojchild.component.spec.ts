import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentprojchildComponent } from './contentprojchild.component';

describe('ContentprojchildComponent', () => {
  let component: ContentprojchildComponent;
  let fixture: ComponentFixture<ContentprojchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentprojchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentprojchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
