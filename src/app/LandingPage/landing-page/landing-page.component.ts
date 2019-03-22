import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  loginToggle = false;
  constructor() { }

  ngOnInit() {
  }

  loginClick(){
    this.loginToggle = !this.loginToggle;
  }
}
