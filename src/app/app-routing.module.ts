import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FinanceComponent } from './finance/finance.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'finance' , component:FinanceComponent},
  {path: 'home', component:HomeComponent},
  {path: '', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
