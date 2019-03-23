import { Add, MarkSeen } from './Store/Actions/DetectionList.Action';
import { State } from './Store/index';
import { User, detection } from './Store/model';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class ApiInterfaceService {
  

  baseURL = 'http://localhost:3000/'
  id: Number;

  constructor(public http: HttpClient, public router: Router, public store: Store<State>, ) {
    this.id = new Number(localStorage.getItem("id"));
   }

  events(offset: string, limit: string): null {

    console.log('event works');

    let params = new HttpParams();
    params = params.append('id', this.id.toString());
    params = params.append('offset', offset);
    params = params.append('limit', limit);

    this.http.get(this.baseURL + 'event', { params: params }).subscribe((value: []) => {

      console.log(value);

      value.forEach((val: detection) => this.store.dispatch(new Add(val)));

    });

    return null;
  }

  MarkAsSeen(eventId: number): any {
    
    this.http.patch(this.baseURL + 'event/markSeen/' + eventId, { }).subscribe(
      (response) => {
        this.store.dispatch(new MarkSeen(eventId));
      },
      (error) => { console.error(error) }
    );

  }

  login(username: string, password: string) {

    let params = new HttpParams();
    params = params.append('username', username);
    params = params.append('password', password);

    this.http.get(this.baseURL + 'login', { params: params }).subscribe(
      (response: User) => {
        if (response.id) {
          this.id = response.id;
          localStorage.setItem("id",this.id.toString());
          this.router.navigate(['/DashBoard']);
        }
      },
      (error) => { console.error(error) }
    );

  }
}
