import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }
  //"https://newsdata.io"
  //newsdata.io
  newsApiUrl = `/api/1/news?country=us&category=top&apikey=pub_1157b43513205aa3b8308d9b3018cf602068`;
  techApiUrl = `/api/1/news?country=us&category=technology&apikey=pub_1157b43513205aa3b8308d9b3018cf602068`
  businessApiUrl = `/api/1/news?country=us&category=business&apikey=pub_1157b43513205aa3b8308d9b3018cf602068`
  entertainmentApiUrl = `/api/1/news?country=us&category=entertainment&apikey=pub_1157b43513205aa3b8308d9b3018cf602068`
  healthApiUrl = `/api/1/news?country=us&category=health&apikey=pub_1157b43513205aa3b8308d9b3018cf602068`
  sportsApiUrl = `/api/1/news?country=us&category=sports&apikey=pub_1157b43513205aa3b8308d9b3018cf602068`
  scienceApiUrl = `/api/1/news?country=us&category=science&apikey=pub_1157b43513205aa3b8308d9b3018cf602068`

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
