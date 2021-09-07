import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }
  //media stacked api key
  ApiUrl = 'http://api.mediastack.com/v1/news?countries=us'
  newsApiUrl = `${this.ApiUrl}&access_key=2bdd3e005df26c5cc8c629dbbeeff858`;
  techApiUrl = `${this.ApiUrl}&categories=technology&access_key=2bdd3e005df26c5cc8c629dbbeeff858`;
  businessApiUrl = `https://new-news-now-angular.web.app/${this.ApiUrl}&categories=business&access_key=2bdd3e005df26c5cc8c629dbbeeff858`;
  entertainmentApiUrl = `${this.ApiUrl}&categories=entertainment&access_key=2bdd3e005df26c5cc8c629dbbeeff858`;
  healthApiUrl = `${this.ApiUrl}&categories=health&access_key=2bdd3e005df26c5cc8c629dbbeeff858`;
  sportsApiUrl = `${this.ApiUrl}&categories=sports&access_key=2bdd3e005df26c5cc8c629dbbeeff858`;
  scienceApiUrl = `${this.ApiUrl}&categories=science&access_key=2bdd3e005df26c5cc8c629dbbeeff858`;

    // ================== news web api url for newsapi (paid subscription) ==================
  // ApiUrl = 'https://newsapi.org/v2/top-headlines?country=';
  // newsApiUrl = `${this.ApiUrl}us&language=en&category=general&apiKey=3aca71ea335d4e12921a9505de371d22`;
  // techApiUrl = `${this.ApiUrl}us&category=technology&apiKey=3aca71ea335d4e12921a9505de371d22`;
  // businessApiUrl = `${this.ApiUrl}us&category=business&apiKey=3aca71ea335d4e12921a9505de371d22`;
  // entertainmentApiUrl = `${this.ApiUrl}us&category=entertainment&apiKey=3aca71ea335d4e12921a9505de371d22`;
  // healthApiUrl = `${this.ApiUrl}us&category=health&apiKey=3aca71ea335d4e12921a9505de371d22`;
  // sportsApiUrl = `${this.ApiUrl}us&category=sports&apiKey=3aca71ea335d4e12921a9505de371d22`;
  // scienceApiUrl = `${this.ApiUrl}us&category=science&apiKey=3aca71ea335d4e12921a9505de371d22`;

  //fetch data
  topHeading():Observable<any> 
  {
    return this._http.get(this.newsApiUrl);
  }
  techNews():Observable<any> {
    return this._http.get(this.techApiUrl);
  }
  businessNews():Observable<any> {
    return this._http.get(this.businessApiUrl)  || [];
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
