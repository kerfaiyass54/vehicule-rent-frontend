import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnVehiculeComponent } from './return-vehicule.component';

describe('ReturnVehiculeComponent', () => {
  let component: ReturnVehiculeComponent;
  let fixture: ComponentFixture<ReturnVehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReturnVehiculeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReturnVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
