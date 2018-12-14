import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { OyunRequest } from '../classes/request/OyunRequest';
import { Utility } from "../utils/utility";

@Injectable({
  providedIn: 'root'
})
export class OyunService {

constructor(private Http:HttpClient) { }

addOyun(oyunRequest:OyunRequest){
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    this.Http.post(Utility.Host+"oyun", oyunRequest, {
      headers: headers
    }).subscribe(data => {});
}

}
