import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchReparationComponent } from './launch-reparation.component';

describe('LaunchReparationComponent', () => {
  let component: LaunchReparationComponent;
  let fixture: ComponentFixture<LaunchReparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchReparationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaunchReparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
