import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelAreaComponent } from './admin-panel-area.component';

describe('AdminPanelAreaComponent', () => {
  let component: AdminPanelAreaComponent;
  let fixture: ComponentFixture<AdminPanelAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPanelAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminPanelAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
