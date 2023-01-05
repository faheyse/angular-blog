import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinanceComponent } from './finance/finance.component';
import { LinksComponent } from './links/links.component';
import { BioComponent } from './bio/bio.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { CvComponent } from './cv/cv.component';
import { SectionComponent } from './cv/section/section.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { MathjaxModule } from "mathjax-angular";
import { CollegeComponent } from './college/college.component';
import { TimelineComponent } from './timeline/timeline.component';
import { BlackScholesComponent } from './finance/black-scholes/black-scholes.component';
import { OrftComponent } from './finance/orft/orft.component';


@NgModule({
  declarations: [
    AppComponent,
    FinanceComponent,
    LinksComponent,
    BioComponent,
    HomeComponent,
    BooksComponent,
    CvComponent,
    SectionComponent,
    CollegeComponent,
    TimelineComponent,
    BlackScholesComponent,
    OrftComponent
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

