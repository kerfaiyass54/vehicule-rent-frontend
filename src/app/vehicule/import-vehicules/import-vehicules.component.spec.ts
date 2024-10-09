import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportVehiculesComponent } from './import-vehicules.component';

describe('ImportVehiculesComponent', () => {
  let component: ImportVehiculesComponent;
  let fixture: ComponentFixture<ImportVehiculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportVehiculesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImportVehiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
