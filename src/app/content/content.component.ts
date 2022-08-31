import { Component, Input, OnInit } from '@angular/core';
import { FilterData } from '../service/filterdata.model';
import { isgData } from '../service/isgdata.model';
import { IsgdataService } from '../service/isgdata.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { PopupCardComponent } from '../popup-card/popup-card.component';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {

  constructor(private isgDataService:IsgdataService,
              public dialog: MatDialog) { 
    this.filteredDataContent = {
      viewBuild : "",
      viewArea : "",
      viewTypeOfAccident : "",
      viewTypeOfReport : ""
    }
  }

  filteredDataContent:FilterData;
  isgData:isgData[];

  ngOnInit(): void {
    this.isgDataService.getData().subscribe(data=>{
      this.isgData = data;
    });
  }
 
  getFilterFromNavbar(event:FilterData){
    this.filteredDataContent = {
      viewBuild : event.viewBuild,
      viewArea : event.viewArea,
      viewTypeOfAccident : event.viewTypeOfAccident,
      viewTypeOfReport : event.viewTypeOfReport
    }
  }


  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(PopupCardComponent, {
      width: '80%',
      height:'90%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
