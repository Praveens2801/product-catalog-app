import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOrderAreaComponent } from './manage-order-area.component';

describe('ManageOrderAreaComponent', () => {
  let component: ManageOrderAreaComponent;
  let fixture: ComponentFixture<ManageOrderAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageOrderAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageOrderAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
