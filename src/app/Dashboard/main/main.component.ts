import { Component, OnInit, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { SwalPartialTargets, SwalComponent } from '@toverux/ngx-sweetalert2';
import { State,getDetections,getUnseen } from '../../Store/index';
import { Store } from '@ngrx/store';
import { detection } from 'src/app/Store/model';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  @ViewChild('SwalPopup') private SwalPopup: SwalComponent;

  mobileQuery: MediaQueryList;

  public profileURL = "https://api.adorable.io/avatars/110/iliesbrh";

  private _mobileQueryListener: () => void;
  Notifications: Observable<detection[]>;
  Undiscovered: Observable<detection[]>;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
     public readonly swalTargets: SwalPartialTargets,public store:Store<State>) {
    this.mobileQuery = media.matchMedia('(max-width: 750px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {
    
     setTimeout(() => {
    this.SwalPopup.show();
    }, 3000); 

    
    this.Notifications = this.store.select<detection[]>(getDetections);
    this.Undiscovered = this.store.select<detection[]>(getUnseen);
    this.store.select<detection[]>(getUnseen).subscribe((val)=>{
      console.log(val);
    });
    

  
  }
  
  ngAfterViewInit(): void {
  }
  goToHistory(event:any){
    console.log(event);
    
  }

}
