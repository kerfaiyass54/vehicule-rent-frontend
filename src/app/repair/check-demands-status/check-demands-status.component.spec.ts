import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckDemandsStatusComponent } from './check-demands-status.component';

describe('CheckDemandsStatusComponent', () => {
  let component: CheckDemandsStatusComponent;
  let fixture: ComponentFixture<CheckDemandsStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckDemandsStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckDemandsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
