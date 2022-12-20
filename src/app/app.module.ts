import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinanceComponent } from './finance/finance.component';
import { BackdropComponent } from './backdrop/backdrop.component';
import { LinksComponent } from './links/links.component';
import { BioComponent } from './bio/bio.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { TimelineComponent } from './timeline/timeline.component';
import { CvComponent } from './cv/cv.component';
import { SectionComponent } from './cv/section/section.component';
import { LcComponent } from './cv/lc/lc.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { MathjaxModule } from "mathjax-angular";
import { CollegeComponent } from './college/college.component';


@NgModule({
  declarations: [
    AppComponent,
    FinanceComponent,
    BackdropComponent,
    LinksComponent,
    BioComponent,
    HomeComponent,
    BooksComponent,
    TimelineComponent,
    CvComponent,
    SectionComponent,
    LcComponent,
    CollegeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    MathjaxModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  exports: [
    
  ]
})
export class AppModule { }

