import { Component, OnInit } from '@angular/core';

import {province, age, caseInfo } from './home.config';

import {HeroService} from './home.service';
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
  constructor(private heroService: HeroService) {
   }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(): void{
       const ok = (r) => {
         
       };

       this.heroService.getInfo()
      .subscribe(ok);

  }
}
