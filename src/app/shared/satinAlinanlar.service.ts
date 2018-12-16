import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utility } from '../utils/utility';
import { SatinAlinanResponse } from '../classes/response/SatinAlinanResponse';
import { Observable } from 'rxjs';
import { SatinAlinan } from '../classes/SatinAlinan';

@Injectable({
  providedIn: 'root'
})
export class SatinAlinanlarService {


  constructor(private Http: HttpClient) { }


  getAllSatinAlinanlar(userId:string): Observable<SatinAlinanResponse[]> {
    return this.Http.get<SatinAlinanResponse[]>(Utility.Host + "satinalinanlar/"+userId);
  }

  satinAl(satinAlinan: SatinAlinan) {
    let headers = new HttpHeaders();
    headers.append("Contact-Type", "application/json");
    this.Http.post(Utility.Host + "satinalinanlar", satinAlinan, {
      headers: headers
    }).subscribe(data => {});
  }
}
