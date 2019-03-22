import { Component, OnInit } from '@angular/core';
import { detection } from 'src/app/Store/model';
import { Store } from '@ngrx/store';
import * as fromStore from '../../Store/index';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {

  
  detections: Observable<detection[]>;

  constructor(public store:Store<fromStore.State>) {

  }

  ngOnInit() {

    this.detections = this.store.select(fromStore.getDetections);


  }

}
