import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  background_colour:string = "white" ; 
  text_colour:string = "black" ; 
  mode:boolean = true ; 

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
      this.background_colour = "white" ; 
      this.text_colour = "black" ; 

    }
    else {
      this.background_colour = "black" ; 
      this.text_colour = "white" ;  
    }
  }

}
