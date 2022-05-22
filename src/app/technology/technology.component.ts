import { Component, OnInit } from '@angular/core';
import {NewsapiserviceService} from '../service/newsapiservice.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  constructor(private _service:NewsapiserviceService) { }

  technologyDisplay:any = [];

  ngOnInit(): void {

    this._service.technews().subscribe((result)=>{
      console.log(result);
      this.technologyDisplay = result.articles;
  })
}

}
