import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinanceComponent } from './finance/finance.component';
import { BackdropComponent } from './backdrop/backdrop.component';
import { LinksComponent } from './links/links.component';
import { BioComponent } from './bio/bio.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FinanceComponent,
    BackdropComponent,
    LinksComponent,
    BioComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
