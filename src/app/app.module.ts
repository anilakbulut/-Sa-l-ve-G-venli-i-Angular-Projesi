
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';

import { HttpClientModule } from '@angular/common/http';
import { FilterAreaPipe } from './pipes/filter-area.pipe';
import { FilterBuildingPipe } from './pipes/filter-building.pipe';
import { FilterTypeOfAccidentPipe } from './pipes/filter-type-of-accident.pipe';
import { FilterTypeOfReportPipe } from './pipes/filter-type-of-report.pipe';
import { PopupCardComponent } from './popup-card/popup-card.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NonconformityDetailsComponent } from './nonconformity-details/nonconformity-details.component';
import { EvaluationAndReportingPanelComponent } from './evaluation-and-reporting-panel/evaluation-and-reporting-panel.component';
import { AddUpdateDeletePanelComponent } from './add-update-delete-panel/add-update-delete-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    FilterAreaPipe,
    FilterBuildingPipe,
    FilterTypeOfAccidentPipe,
    FilterTypeOfReportPipe,
    PopupCardComponent,
    NonconformityDetailsComponent,
    EvaluationAndReportingPanelComponent,
    AddUpdateDeletePanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      MatSelectModule,
      MatIconModule,
      HttpClientModule,
      MatDialogModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
