import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationAndReportingPanelComponent } from './evaluation-and-reporting-panel.component';

describe('EvaluationAndReportingPanelComponent', () => {
  let component: EvaluationAndReportingPanelComponent;
  let fixture: ComponentFixture<EvaluationAndReportingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationAndReportingPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationAndReportingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
