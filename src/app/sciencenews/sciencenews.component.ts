import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-sciencenews',
  templateUrl: './sciencenews.component.html',
  styleUrls: ['./sciencenews.component.scss']
})
export class SciencenewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  sciencenewsDisplay: any = [];

  ngOnInit(): void {
    this._services.scienceNews().subscribe((result) => {
      return this.sciencenewsDisplay = result.data;
    })
  }

}
