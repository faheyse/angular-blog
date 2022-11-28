import { Component, OnInit, Output } from '@angular/core';
//import {SectionComponent} from './section/section.component';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  @Output() headings:string[] = ["Contact", "Background", "Qualifications"] ; 

//@Output() 
// write bio and info in txt files, extract and use *ngIf statements to extract data from files and put into HTML

  constructor() { }

  ngOnInit(): void {
  }

}
