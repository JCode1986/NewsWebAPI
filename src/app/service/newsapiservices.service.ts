import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //news web api url
  ApiUrl = 'https://newsapi.org/v2/top-headlines?country=';

  newsApiUrl = `${this.ApiUrl}us&category=business&apiKey=${environment.API_KEY}`;
  techApiUrl = `${this.ApiUrl}in&category=technology&apiKey=${environment.API_KEY}`;
  businessApiUrl = `${this.ApiUrl}in&category=business&apiKey=${environment.API_KEY}`;

  //fetch data
  topHeading():Observable<any> 
  {
    return this._http.get(this.newsApiUrl)
  }
  techNews():Observable<any> {
    return this._http.get(this.techApiUrl);
  }
  businessNews():Observable<any> {
    return this._http.get(this.businessApiUrl);
  }
}
