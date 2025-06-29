import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileAreaComponent } from './user-profile-area.component';

describe('UserProfileAreaComponent', () => {
  let component: UserProfileAreaComponent;
  let fixture: ComponentFixture<UserProfileAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserProfileAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
