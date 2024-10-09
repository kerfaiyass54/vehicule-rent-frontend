import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelReparationComponent } from './cancel-reparation.component';

describe('CancelReparationComponent', () => {
  let component: CancelReparationComponent;
  let fixture: ComponentFixture<CancelReparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelReparationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CancelReparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
