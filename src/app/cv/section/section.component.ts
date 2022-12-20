import { Component, OnInit, Input, Output } from '@angular/core';
import { CvComponent} from '../cv.component';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {


  @Input() theme_background!:string ;
  @Input() theme_text!:string ; 
  // @Output() section.background!:string;
  // @Output() section.text!:string ;
  // section:CvComponent = new CvComponent() ;
  //@Output() section.background ; 
  // @Output() section.text:string = this.section.section.text ; 

  constructor() { 
  }

  ngOnInit(): void {
  }

}
