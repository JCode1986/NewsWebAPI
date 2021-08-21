import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //new web api url
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=API_KEY";

  topHeading():Observable<any> 
  {
    return this._http.get(this.newsApiUrl)
  }
}
