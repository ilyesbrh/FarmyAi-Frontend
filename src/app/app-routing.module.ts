import { dataEvent } from './Dashboard/time-line/data-event.resolver';
import { DashHomeComponent } from './Dashboard/dash-home/dash-home.component';
import { TimeLineComponent } from './Dashboard/time-line/time-line.component';
import { MainComponent } from './Dashboard/main/main.component';
import { LandingPageComponent } from './LandingPage/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'LandingPage', component: LandingPageComponent},
  { path: 'DashBoard', component: MainComponent ,children:[
    {path:'',component:DashHomeComponent},
    {path:'Timeline/:from/:to',component:TimeLineComponent,resolve:{events:dataEvent}}
  ]},
  { path: '**', redirectTo: 'LandingPage', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 