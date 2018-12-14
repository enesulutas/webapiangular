import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Kategori } from "../classes/Kategori";
import { Utility } from "../utils/utility";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KategoriService {

constructor(private Http:HttpClient) { }


getAll():Observable<Kategori[]>{
  return this.Http.get<Kategori[]>(Utility.Host+"kategori");
}

}
