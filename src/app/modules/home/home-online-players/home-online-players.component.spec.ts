import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOnlinePlayersComponent } from './home-online-players.component';

describe('HomeOnlinePlayersComponent', () => {
  let component: HomeOnlinePlayersComponent;
  let fixture: ComponentFixture<HomeOnlinePlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeOnlinePlayersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOnlinePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
