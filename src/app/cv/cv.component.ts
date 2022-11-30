import { Component, OnInit, Output, Input } from '@angular/core';
import {SectionComponent} from './section/section.component';



@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  colour:number = 0 ; 
  @Output() background:string = "black"; 
  @Output() text:string  = "white";

  toggle():void {
    this.colour += 1 ; 
    this.colour = this.colour % 5 ; 
    this.invert() ; 
  }

  invert():void {
  if (this.colour === 0) {
    this.background = "black"; 
    this.text ="white"; 
  }

  else if (this.colour == 1) {
    this.background = "white"; 
    this.text ="black"; 
  }

  else if (this.colour == 2) {
    this.background = "grey"; 
    this.text ="white"; 
  }

  else if (this.colour == 3) {
    this.background = "purple"; 
    this.text ="white"; 
  }

  else if (this.colour == 4) {
    this.background = "navy"; 
    this.text ="white"; 
  }

  }

  constructor() { 
  }

  ngOnInit(): void {
  }

}
