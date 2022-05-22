import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'; '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import {NewsapiserviceService} from './service/newsapiservice.service';
import { TechnologyComponent } from './technology/technology.component';
import { SportsComponent } from './sports/sports.component';
import { FinancialComponent } from './financial/financial.component';





@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnologyComponent,
    SportsComponent,
    FinancialComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NewsapiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
