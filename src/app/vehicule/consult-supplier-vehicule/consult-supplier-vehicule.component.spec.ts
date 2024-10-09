import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultSupplierVehiculeComponent } from './consult-supplier-vehicule.component';

describe('ConsultSupplierVehiculeComponent', () => {
  let component: ConsultSupplierVehiculeComponent;
  let fixture: ComponentFixture<ConsultSupplierVehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultSupplierVehiculeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultSupplierVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
