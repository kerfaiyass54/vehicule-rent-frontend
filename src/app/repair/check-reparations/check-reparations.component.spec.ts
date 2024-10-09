import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckReparationsComponent } from './check-reparations.component';

describe('CheckReparationsComponent', () => {
  let component: CheckReparationsComponent;
  let fixture: ComponentFixture<CheckReparationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckReparationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckReparationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
