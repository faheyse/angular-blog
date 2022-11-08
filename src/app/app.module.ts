import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketWatcherComponent } from './market-watcher/market-watcher.component';
import { BackdropComponent } from './backdrop/backdrop.component';
import { LinksComponent } from './links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketWatcherComponent,
    BackdropComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
