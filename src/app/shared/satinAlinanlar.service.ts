import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utility } from '../utils/utility';
import { SatinAlinanResponse } from '../classes/response/SatinAlinanResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SatinAlinanlarService {


  constructor(private Http: HttpClient) { }


  getAllSatinAlinanlar(userId:string): Observable<SatinAlinanResponse[]> {
    return this.Http.get<SatinAlinanResponse[]>(Utility.Host + "satinalinanlar/"+userId);
  }

}
