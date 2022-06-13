import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersintroComponent } from './usersintro.component';

describe('UsersintroComponent', () => {
  let component: UsersintroComponent;
  let fixture: ComponentFixture<UsersintroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersintroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
