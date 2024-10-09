import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelTicketsComponent } from './cancel-tickets.component';

describe('CancelTicketsComponent', () => {
  let component: CancelTicketsComponent;
  let fixture: ComponentFixture<CancelTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelTicketsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CancelTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
