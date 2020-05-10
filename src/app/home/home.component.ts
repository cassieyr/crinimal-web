import { Component, OnInit } from '@angular/core';

import {province, age, caseInfo } from './home.config';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menu = [];
  province = province;
  age = age;
  caseInfo = caseInfo;
  value;
  constructor() { }

  ngOnInit(): void {
  }

}
