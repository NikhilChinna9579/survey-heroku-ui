import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewfeedPageComponent } from './admin-viewfeed-page.component';

describe('AdminViewfeedPageComponent', () => {
  let component: AdminViewfeedPageComponent;
  let fixture: ComponentFixture<AdminViewfeedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewfeedPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewfeedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
