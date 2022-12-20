import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {

  constructor() { }

  @Input() text_colour:string = "" ; 

  ngOnInit(): void {
  }

}
