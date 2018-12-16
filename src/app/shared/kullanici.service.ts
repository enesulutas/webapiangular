import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Kullanici } from "../classes/Kullanici";
import { Utility } from "../utils/utility";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class KullaniciService {
  constructor(private Http: HttpClient) {}

  login(kullanici: Kullanici): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.Http.post(Utility.Host + "kullanici/login", kullanici, {
      headers: headers
    });
  }

  
}
