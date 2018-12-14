import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  { Market } from '../classes/Market';
import { Utility } from "../utils/utility";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MarketService {

constructor(private Http:HttpClient ) {}

getAll():Observable<Market[]>{
 return this.Http.get<Market[]>(Utility.Host+"market")
}

addMarket(market:Market){
  let headers=new HttpHeaders();
  headers.append("Content-Type", "application/json");
  this.Http.post(Utility.Host+"market", market, {
    headers: headers
  }).subscribe(data => {});}

}
