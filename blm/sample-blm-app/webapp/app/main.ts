import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {AppModule} from './modules/AppModule';

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);