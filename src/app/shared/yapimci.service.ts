import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Yapimci } from "../classes/Yapimci";
import { Utility } from "../utils/utility";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class YapimciService {
  constructor(private Http: HttpClient) {}


  getAll():Observable<Yapimci[]>{
    return this.Http.get<Yapimci[]>(Utility.Host+"yapimci");
  }

  addYapimci(yapimci: Yapimci) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    this.Http.post(Utility.Host+"yapimci", yapimci, {
      headers: headers
    }).subscribe(data => {});
  }
}
