import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MODULE_ROUTES,MODULE_COMPONENTS } from './dashboard.routes';

import { LoginService }         from './auth/login/login.service';

import { SidebarModule } from '../sidebar/sidebar.module';
import { FooterModule } from '../shared/footer/footer.module';
import { NavbarModule} from '../shared/navbar/navbar.module';

import {GoogleChart} from 'angular2-google-chart/directives/angular2-google-chart.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SidebarModule,
    FooterModule,
    NavbarModule,
    RouterModule.forChild(MODULE_ROUTES)
  ],
  declarations: [ MODULE_COMPONENTS, GoogleChart ],
  providers: [
    LoginService
  ],
})

export class DashboardModule{}
