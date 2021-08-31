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

  newsApiUrl = `${this.ApiUrl}us&language=en&category=general&apiKey=${environment.API_KEY}`;
  techApiUrl = `${this.ApiUrl}us&category=technology&apiKey=${environment.API_KEY}`;
  businessApiUrl = `${this.ApiUrl}us&category=business&apiKey=${environment.API_KEY}`;
  entertainmentApiUrl = `${this.ApiUrl}us&category=entertainment&apiKey=${environment.API_KEY}`;
  healthApiUrl = `${this.ApiUrl}us&category=health&apiKey=${environment.API_KEY}`;
  sportsApiUrl = `${this.ApiUrl}us&category=sports&apiKey=${environment.API_KEY}`;
  scienceApiUrl = `${this.ApiUrl}us&category=science&apiKey=${environment.API_KEY}`;

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
  entertainmentNews():Observable<any> {
    return this._http.get(this.entertainmentApiUrl);
  }
  healthNews():Observable<any> {
    return this._http.get(this.healthApiUrl);
  }
  sportsNews():Observable<any> {
    return this._http.get(this.sportsApiUrl);
  }
  scienceNews():Observable<any> {
    return this._http.get(this.scienceApiUrl);
  }
}
