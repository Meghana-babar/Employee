import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsubscribeComponent } from './notificationsubscribe.component';

describe('NotificationsubscribeComponent', () => {
  let component: NotificationsubscribeComponent;
  let fixture: ComponentFixture<NotificationsubscribeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationsubscribeComponent]
    });
    fixture = TestBed.createComponent(NotificationsubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
