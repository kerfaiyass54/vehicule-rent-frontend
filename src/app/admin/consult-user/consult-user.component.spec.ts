import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultUserComponent } from './consult-user.component';

describe('ConsultUserComponent', () => {
  let component: ConsultUserComponent;
  let fixture: ComponentFixture<ConsultUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
