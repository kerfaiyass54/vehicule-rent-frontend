import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVehiculeComponent } from './delete-vehicule.component';

describe('DeleteVehiculeComponent', () => {
  let component: DeleteVehiculeComponent;
  let fixture: ComponentFixture<DeleteVehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteVehiculeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
