import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordEval } from './password-eval';

describe('PasswordEval', () => {
  let component: PasswordEval;
  let fixture: ComponentFixture<PasswordEval>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordEval]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordEval);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
