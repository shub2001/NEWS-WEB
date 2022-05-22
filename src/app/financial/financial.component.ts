import { Component, OnInit } from '@angular/core';
import {NewsapiserviceService} from '../service/newsapiservice.service';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent implements OnInit {

  
  constructor(private _service:NewsapiserviceService) { }
  
  financialDisplay:any = [];
  
  ngOnInit(): void {
    this._service.financialnews().subscribe((result)=>{
      console.log(result);
      this.financialDisplay = result.articles;
  })




  }

}
