import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { angularMaterialModules } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './LandingPage/landing-page/landing-page.component';
import { LoginComponent } from './LandingPage/login/login.component';
import { HomeComponent } from './LandingPage/home/home.component';
import { MainComponent } from './Dashboard/main/main.component';
import { TimeLineComponent } from './Dashboard/time-line/time-line.component';
import { DashHomeComponent } from './Dashboard/dash-home/dash-home.component';

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { ChartsModule } from 'ng2-charts';
import { MdePopoverModule } from '@material-extended/mde';
import { StoreModule } from '@ngrx/store';
import { reducers } from './Store';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    HomeComponent,
    MainComponent,
    TimeLineComponent,
    HomeComponent,
    DashHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    angularMaterialModules,
    ChartsModule,
    MdePopoverModule,
    SweetAlert2Module.forRoot({customClass:'animated bounceIn'}),
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
