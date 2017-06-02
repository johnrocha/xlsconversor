import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
// import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { AppComponent }   from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DashboardModule } from './dashboard/dashboard.module';



import { AppConfig } from './app.config';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { BlockUIModule } from 'ng-block-ui';

@NgModule({
    imports:      [
        BrowserModule,
        DashboardModule,
        BlockUIModule,
        RouterModule.forRoot([])
    ],
    declarations: [ AppComponent, DashboardComponent ],
    providers: [
      AppConfig,
      {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
