import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonconformityDetailsComponent } from './nonconformity-details.component';

describe('NonconformityDetailsComponent', () => {
  let component: NonconformityDetailsComponent;
  let fixture: ComponentFixture<NonconformityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonconformityDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonconformityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
