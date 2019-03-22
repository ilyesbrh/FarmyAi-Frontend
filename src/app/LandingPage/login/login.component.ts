import { ApiInterfaceService } from './../../api-interface.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  baseURL = 'http://localhost:3000/'
  constructor(public api:ApiInterfaceService) { }

  ngOnInit() {
  }

  login(username: string, password: string) {

    this.api.login(username,password);
  }

}
