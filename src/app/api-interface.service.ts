import { User } from './Store/model';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiInterfaceService {

  baseURL = 'http://localhost:3000/'
  id: number;

  constructor(public http: HttpClient, public router: Router) { }


  login(username: string, password: string) {

    let params = new HttpParams();
    params = params.append('username', username);
    params = params.append('password', password);

    this.http.get(this.baseURL + 'login', { params: params }).subscribe(
      (response: User) => {
        if (response.id) {
          this.id = response.id;
          this.router.navigate(['/DashBoard']);
        }
      },
      (error) => { console.error(error) }
    );

  }
}
