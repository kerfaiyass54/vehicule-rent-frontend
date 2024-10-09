import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckVehiculesComponent } from './check-vehicules.component';

describe('CheckVehiculesComponent', () => {
  let component: CheckVehiculesComponent;
  let fixture: ComponentFixture<CheckVehiculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckVehiculesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckVehiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
