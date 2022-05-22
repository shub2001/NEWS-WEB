import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private _http: HttpClient) { }


  //topheading url
  newApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=e4effdc0d0a24ab8bdd957f7da17d954";

  //Technology url

  techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=e4effdc0d0a24ab8bdd957f7da17d954";
  //sports news

  sportsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=e4effdc0d0a24ab8bdd957f7da17d954";

  //financial news
  financialApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e4effdc0d0a24ab8bdd957f7da17d954";


  topHeading(): Observable<any> {
    return this._http.get(this.newApiUrl);
  }

  technews(): Observable<any> {
    return this._http.get(this.techApiUrl);
  }

  sportsnews(): Observable<any> {
    return this._http.get(this.sportsApiUrl);
  }

  financialnews(): Observable<any> {
    return this._http.get(this.financialApiUrl);
  }

}
