import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutAreaComponent } from './checkout-area.component';

describe('CheckoutAreaComponent', () => {
  let component: CheckoutAreaComponent;
  let fixture: ComponentFixture<CheckoutAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckoutAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
