import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';

import { FinanceComponent } from './finance/finance.component';
import { HomeComponent } from './home/home.component';
import { TimelineComponent } from './timeline/timeline.component';


const routes: Routes = [
  {path: 'finance' , component:FinanceComponent},
  {path: 'home', component:HomeComponent},
  {path: '', component:HomeComponent},
  {path: 'books', component:BooksComponent},
  {path: 'timeline', component:TimelineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
