import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feed2Component } from './feed2.component';

describe('Feed2Component', () => {
  let component: Feed2Component;
  let fixture: ComponentFixture<Feed2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feed2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feed2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
