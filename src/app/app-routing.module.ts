import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';

import { FinanceComponent } from './finance/finance.component';
import { HomeComponent } from './home/home.component';
import { TimelineComponent } from './timeline/timeline.component';
import {CvComponent} from './cv/cv.component' ; 

const routes: Routes = [
  {path: 'finance' , component:FinanceComponent},
  {path: 'home', component:HomeComponent},
  {path: '', component:HomeComponent},
  {path: 'books', component:BooksComponent},
  {path: 'timeline', component:TimelineComponent},
  {path: 'cv', component:CvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
