import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateDeletePanelComponent } from './add-update-delete-panel.component';

describe('AddUpdateDeletePanelComponent', () => {
  let component: AddUpdateDeletePanelComponent;
  let fixture: ComponentFixture<AddUpdateDeletePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateDeletePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateDeletePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
