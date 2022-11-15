import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonelCardComponent } from './personel-card.component';

describe('PersonelCardComponent', () => {
  let component: PersonelCardComponent;
  let fixture: ComponentFixture<PersonelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonelCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
