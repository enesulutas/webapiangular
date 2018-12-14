import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import  { Item } from '../classes/Item';
import { Utility } from '../utils/utility';
import { ItemRequest } from '../classes/request/ItemRequest';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private Http:HttpClient ) {}


  getAll():Observable<Item[]>{
    return this.Http.get<Item[]>(Utility.Host+"item")
  }

  addItem(itemRequest:ItemRequest){
    let headers=new HttpHeaders();
    headers.append("Content-Type", "application/json");
    this.Http.post(Utility.Host+"item", itemRequest, {
      headers: headers
    }).subscribe(data => {});}


}
