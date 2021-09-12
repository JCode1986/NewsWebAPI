import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';
@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.scss']
})
export class TopheadingComponent implements OnInit {
// test
  constructor(private _services:NewsapiservicesService) { }

  topheadingDisplay:any = [];

  ngOnInit(): void {
    this._services.topHeading().subscribe((result) => {
      console.log(result, "what is this?");
      this.topheadingDisplay = result.results;
    })
  }
}
