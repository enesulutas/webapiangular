import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Satista } from '../classes/Satista';
import { Observable } from "rxjs";
import { Yapimci } from '../classes/Yapimci';
import { Utility } from '../utils/utility';



@Injectable({
  providedIn: 'root'
})
export class SatistaService {

constructor(private Http:HttpClient) { 
}

getAll():Observable<Satista[]>{
  return this.Http.get<Satista[]>(Utility.Host+"satista");
}
}
