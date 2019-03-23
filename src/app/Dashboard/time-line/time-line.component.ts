import { ApiInterfaceService } from './../../api-interface.service';
import { Component, OnInit } from '@angular/core';
import { detection } from 'src/app/Store/model';
import { Store } from '@ngrx/store';
import * as fromStore from '../../Store/index';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { PageEvent } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {

  eventsLength:number;
  detections: Observable<detection[]>;
  constructor(public store: Store<fromStore.State>, public api: ApiInterfaceService, 
    private sanitizer: DomSanitizer, public router: Router) { }

  ngOnInit() {

    this.api.getEventCount().subscribe(val=>{
      this.eventsLength=val;
      console.log('count is '+val);
      
      
    }
      );
    this.detections = this.store.select(fromStore.getDetections);
  }
  markAsSeen(eventId: number) {

    this.api.MarkAsSeen(eventId);
  }
  bypassImageUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  pageEvent(pageEvent: PageEvent) {

    let index = pageEvent.pageIndex + 1;
    let size = pageEvent.pageSize;
    let current = size * index;
    console.log(current);
    this.router.navigate(['/DashBoard/Timeline/'+(current-size)+'/'+size]);
    
  }
}
