import { AfterContentInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import {  ViewChild, AfterViewInit } from '@angular/core';

import {FormControl} from '@angular/forms';
import { FilterData } from '../service/filterdata.model';
import { isgData } from '../service/isgdata.model';
import { IsgdataService } from '../service/isgdata.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [IsgdataService],
})
export class NavbarComponent implements OnInit {
  selectedBuilding:string ="";
  selectedArea:string ="";
  selectedTypeOfAccident:string="";
  selectedTypeOfReport:string="";


  constructor(private isgDataService:IsgdataService) {  }

  filteredData:FilterData;
  @Output() valueChange = new EventEmitter<FilterData>(); 

  isgData:isgData[];
  
  ngOnInit(): void {
     this.isgDataService.getData().subscribe(data=>{
      this.isgData = data;
    });
    
    this.filteredData = {
      viewBuild : this.selectedBuilding,
      viewArea : this.selectedArea,
      viewTypeOfAccident : this.selectedTypeOfAccident,
      viewTypeOfReport : this.selectedTypeOfReport
    }
    setTimeout(() => {
      this.setAllFilter();
    }, 1000);
  }
  
  onSubmit(){
    this.valueChange.emit(this.filteredData);
  }

  chooseOption(){
    this.filteredData = {
      viewBuild : this.selectedBuilding,
      viewArea : this.selectedArea,
      viewTypeOfAccident : this.selectedTypeOfAccident,
      viewTypeOfReport : this.selectedTypeOfReport
    }
    this.onSubmit();
  }
  chooseNoFilter(id:string){
    if(id == "removeBuilding") this.selectedBuilding="";
    else if(id == "removeArea") this.selectedArea="";
    else if(id == "removeAccident") this.selectedTypeOfAccident="";
    else if(id == "removeReport") this.selectedTypeOfReport="";
    this.chooseOption();
  }

  area:string[] = [];
  building:string[] = [];
  typeOfAccident:string[] = [];
  typeOfReport:string[] = [];

  setAllFilter(){
    this.isgData.forEach(element => {
      if(!this.area.includes(element.konum)){
        this.area.push(element.konum);
      }
      if(!this.building.includes(element.bina)){
        this.building.push(element.bina);
      }
      if(!this.typeOfAccident.includes(element.tur)){
        this.typeOfAccident.push(element.tur);
      }
      if(!this.typeOfReport.includes(element.raporturu)){
        this.typeOfReport.push(element.raporturu);
      }
    });
    //sort all filter element
    this.area.sort((one, two) => (one > two ? 1 : -1));
    this.building.sort((one, two) => (one > two ? 1 : -1));
    this.typeOfAccident.sort((one, two) => (one > two ? 1 : -1));
    this.typeOfReport.sort((one, two) => (one > two ? 1 : -1));
  }



}
