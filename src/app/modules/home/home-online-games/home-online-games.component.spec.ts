import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOnlineGamesComponent } from './home-online-games.component';

describe('HomeOnlineGamesComponent', () => {
  let component: HomeOnlineGamesComponent;
  let fixture: ComponentFixture<HomeOnlineGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeOnlineGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOnlineGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
