import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utility } from '../utils/utility';
import { Ozellik } from '../classes/Ozellik';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OzellikService {


  constructor(private Http: HttpClient) { }


  getAll(): Observable<Ozellik[]> {
    return this.Http.get<Ozellik[]>(Utility.Host + "ozellik");
  }

  addOzellik(ozellik: Ozellik) {
    let headers = new HttpHeaders();
    headers.append("Contact-Type", "application/json");
    this.Http.post(Utility.Host + "ozellik", ozellik, {
      headers: headers
    }).subscribe(data => { });
  }
}

