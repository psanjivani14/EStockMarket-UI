import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCompanyDetailsComponent } from './display-company-details.component';

describe('DisplayCompanyDetailsComponent', () => {
  let component: DisplayCompanyDetailsComponent;
  let fixture: ComponentFixture<DisplayCompanyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCompanyDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayCompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
