import { Component, OnInit } from '@angular/core';
import {NewsapiserviceService} from '../service/newsapiservice.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private _service:NewsapiserviceService) { }

  sportsDisplay:any = [];

  ngOnInit(): void {
    this._service.sportsnews().subscribe((result)=>{
      console.log(result);
      this.sportsDisplay = result.articles;
  })
   
  }

}
