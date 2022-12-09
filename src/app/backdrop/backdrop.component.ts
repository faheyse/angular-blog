import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss']
})
export class BackdropComponent implements OnInit {

  background_colour:string = "ghostwhite" ; 
  mode:boolean = true ; 

  @Output() toggle_text:string = "black" ; 
  toggle_bg:string = "ghostwhite" ; 

  toolbar_text:string = "white" ; 
  toolbar_bg:string = "#14162b" ; 

  constructor() { }

  ngOnInit(): void {
    this.update_background() ; 

  }

  clickUpdate():void {
    this.mode = !this.mode ; 
    this.update_background() ; 
  }

  update_background(): void {
    if (this.mode){
      this.background_colour = "ghostwhite" ; 
      this.toggle_text = "black" ; 
      this.toggle_bg = "#14162b" ; 
      this.toolbar_text = "white" ; 
      this.toolbar_bg = "#14162b" ; 
    }
    else {
      this.background_colour = "black";
      this.toggle_text = "white" ; 
      this.toggle_bg = "white" ; 
      this.toolbar_text = "black" ; 
      this.toolbar_bg = "white" ; 
    }
  }

}