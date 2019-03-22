import { Component, OnInit, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { SwalPartialTargets, SwalComponent } from '@toverux/ngx-sweetalert2';

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

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public readonly swalTargets: SwalPartialTargets) {
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
  }
  
  ngAfterViewInit(): void {
  }
  goToHistory(event:any){
    console.log(event);
    
  }

}
