import { Component, OnInit, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { SwalPartialTargets, SwalComponent } from '@toverux/ngx-sweetalert2';
import { State, getDetections, getUnseen } from '../../Store/index';
import { Store } from '@ngrx/store';
import { detection } from 'src/app/Store/model';
import { Observable } from 'rxjs/internal/Observable';
import { ApiInterfaceService } from 'src/app/api-interface.service';
import { interval } from 'rxjs';
import swal from 'sweetalert2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  @ViewChild('SwalPopup') private SwalPopup: SwalComponent;

  mobileQuery: MediaQueryList;

  popup: { animal: string, accuracy: number } = { animal: "", accuracy: -1 };
  public profileURL = "https://api.adorable.io/avatars/110/iliesbrh";

  private _mobileQueryListener: () => void;
  Notifications: Observable<detection[]>;
  Undiscovered: Observable<detection[]>;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    public readonly swalTargets: SwalPartialTargets, public store: Store<State>
    , public api: ApiInterfaceService) {
    this.mobileQuery = media.matchMedia('(max-width: 750px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {

    interval(60 * 1000).subscribe(data => {
      this.api.getLiveUpdate().subscribe(val =>{
        if(val[0]){
          this.SwalPopup.title = val.class+' Detected';
          this.SwalPopup.text = 'accuracy '+val.confidence+'%';
          this.SwalPopup.show();
        }
      })
    });


    this.Notifications = this.store.select<detection[]>(getDetections);
    this.Undiscovered = this.store.select<detection[]>(getUnseen);

  }

  ngAfterViewInit(): void {
  }
  goToHistory(event: any) {
    console.log(event);

  }

}
