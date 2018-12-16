import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Satista} from "../classes/Satista";
import { Observable } from "rxjs";
import { Utility } from "../utils/utility";
import { SatistaRequest } from "../classes/request/SatistaRequest";

@Injectable({
  providedIn: "root"
})
export class SatistaService {
  constructor(private Http: HttpClient) {}

  getAll(): Observable<Satista[]> {
    return this.Http.get<Satista[]>(Utility.Host + "satista");
  }

  satisaKoy(satis: SatistaRequest) {
    let headers = new HttpHeaders();
    headers.append("Contact-Type", "application/json");
    this.Http.post(Utility.Host + "satista", satis, {
      headers: headers
    }).subscribe(data => {});
  }
}
