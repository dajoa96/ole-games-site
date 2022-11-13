import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBeginComponent } from './home-begin.component';

describe('HomeBeginComponent', () => {
  let component: HomeBeginComponent;
  let fixture: ComponentFixture<HomeBeginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBeginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBeginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
