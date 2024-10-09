import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultVehiculeUsersComponent } from './consult-vehicule-users.component';

describe('ConsultVehiculeUsersComponent', () => {
  let component: ConsultVehiculeUsersComponent;
  let fixture: ComponentFixture<ConsultVehiculeUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultVehiculeUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultVehiculeUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
