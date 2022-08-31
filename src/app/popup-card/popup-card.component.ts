import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {style, state, animate, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-popup-card',
  templateUrl: './popup-card.component.html',
  styleUrls: ['./popup-card.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   
        style({opacity:0}),
        animate(1000, style({opacity:1})) 
      ]),
      transition(':leave', [   
        animate(0, style({opacity:0})) 
      ])
    ])
  ]
})
export class PopupCardComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PopupCardComponent>) { }
  ngOnInit(): void {
  }

  isClickedFirst:boolean = false;
  isClickedSecond:boolean = false;
  isClickedThird:boolean = false;

  onclickFirstButton() {
    if(this.isClickedFirst){
      this.isClickedFirst = false;
    }
    else{
      this.isClickedFirst = true;
      this.isClickedSecond = false;
      this.isClickedThird = false;
    }
  }
  onclickSecondButton() {
    if(this.isClickedSecond){
      this.isClickedSecond = false;
    }
    else{
      this.isClickedSecond = true;
      this.isClickedFirst = false;
      this.isClickedThird = false;

    }
  }
  onclickThirdButton() {
    if(this.isClickedThird){
      this.isClickedThird = false;
    }
    else{
      this.isClickedThird = true;
      this.isClickedFirst = false;
      this.isClickedSecond = false;
    }
  }
 

}
