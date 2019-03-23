import { CameraStats, BarChartOptions } from './../../Store/model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../Store/index';
import { Observable } from 'rxjs';
import { ApiInterfaceService } from 'src/app/api-interface.service';

@Component({
  selector: 'app-dash-home',
  templateUrl: './dash-home.component.html',
  styleUrls: ['./dash-home.component.css']
})
export class DashHomeComponent implements OnInit {
  
  animalsStats : Observable<any[]>;

  constructor(public store:Store<fromStore.State>,public api:ApiInterfaceService) { }

  public barChartOptions : Observable<BarChartOptions>;

  public barChartLabels : Observable<any[]>;
  public barChartType : Observable<String>;
  public barChartLegend : Observable<boolean>;

  public barChartData : Observable<CameraStats[]>;
  
  ngOnInit() {
    this.barChartOptions = this.store.select(fromStore.getOptions);
    this.barChartLabels = this.store.select(fromStore.getLabel);
    this.barChartType = this.store.select(fromStore.getType);
    this.barChartLegend = this.store.select(fromStore.getLegend);
    this.barChartData = this.store.select(fromStore.getData);
    
    this.animalsStats = this.api.getAnimals();
    
  }

}