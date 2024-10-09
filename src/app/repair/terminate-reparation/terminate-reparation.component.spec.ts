import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminateReparationComponent } from './terminate-reparation.component';

describe('TerminateReparationComponent', () => {
  let component: TerminateReparationComponent;
  let fixture: ComponentFixture<TerminateReparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerminateReparationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TerminateReparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
