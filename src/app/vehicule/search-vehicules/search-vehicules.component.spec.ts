import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVehiculesComponent } from './search-vehicules.component';

describe('SearchVehiculesComponent', () => {
  let component: SearchVehiculesComponent;
  let fixture: ComponentFixture<SearchVehiculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchVehiculesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchVehiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
