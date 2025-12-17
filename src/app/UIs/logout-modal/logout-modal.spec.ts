import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutModal } from './logout-modal';

describe('LogoutModal', () => {
  let component: LogoutModal;
  let fixture: ComponentFixture<LogoutModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoutModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoutModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
