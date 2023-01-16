import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';

import { FinanceComponent } from './finance/finance.component';
import { HomeComponent } from './home/home.component';
import {CvComponent} from './cv/cv.component' ; 
import { CollegeComponent} from './college/college.component';
import { TimelineComponent } from './timeline/timeline.component';
import { BlackScholesComponent } from './finance/black-scholes/black-scholes.component';
import { KellyComponent } from './finance/kelly/kelly.component';

const routes: Routes = [
  {path: 'finance' , component:FinanceComponent},
  {path: 'home', component:HomeComponent},
  {path: '', component:HomeComponent},
  {path: 'books', component:BooksComponent},
  {path: 'cv', component:CvComponent},
  {path: 'college', component:CollegeComponent},
  {path: 'timeline', component:TimelineComponent},
  {path: 'finance/black-scholes', component: BlackScholesComponent},
  {path: 'finance/kelly', component:KellyComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
