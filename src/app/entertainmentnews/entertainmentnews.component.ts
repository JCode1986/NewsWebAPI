import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-entertainmentnews',
  templateUrl: './entertainmentnews.component.html',
  styleUrls: ['./entertainmentnews.component.scss']
})
export class EntertainmentnewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  entertainmentnewsDisplay: any = [];

  ngOnInit(): void {
    this._services.entertainmentNews().subscribe((result) => {
      return this.entertainmentnewsDisplay = result.results;
    })
  }

}
