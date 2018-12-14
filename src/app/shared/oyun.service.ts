import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { OyunRequest } from '../classes/request/OyunRequest';
import { Utility } from "../utils/utility";
import { Oyun } from '../classes/Oyun';
import { Observable } from "rxjs";


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

getAll(): Observable<Oyun[]> {
  return this.Http.get<Oyun[]>(Utility.Host + "oyun");
}

}
