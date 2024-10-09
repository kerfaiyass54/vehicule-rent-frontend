import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckClientsComponent } from './check-clients.component';

describe('CheckClientsComponent', () => {
  let component: CheckClientsComponent;
  let fixture: ComponentFixture<CheckClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckClientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
