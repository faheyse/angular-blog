import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './assets/environments/environment';
import 'echarts/theme/dark.js';

if (environment.production) {
  enableProdMode();
}

export var background_colour:string = "green" ; 

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
