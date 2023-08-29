import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustompipescompoComponent } from './custompipescompo.component';

describe('CustompipescompoComponent', () => {
  let component: CustompipescompoComponent;
  let fixture: ComponentFixture<CustompipescompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustompipescompoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustompipescompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
