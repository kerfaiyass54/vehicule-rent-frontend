import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAdressComponent } from './delete-adress.component';

describe('DeleteAdressComponent', () => {
  let component: DeleteAdressComponent;
  let fixture: ComponentFixture<DeleteAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteAdressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
