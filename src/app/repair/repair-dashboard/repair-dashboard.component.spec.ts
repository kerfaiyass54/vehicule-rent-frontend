import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairDashboardComponent } from './repair-dashboard.component';

describe('RepairDashboardComponent', () => {
  let component: RepairDashboardComponent;
  let fixture: ComponentFixture<RepairDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepairDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepairDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
