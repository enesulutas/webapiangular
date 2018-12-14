import { Item } from "../Item";
import { ItemResim } from "../ItemResim"

export class ItemRequest {

constructor(item:Item,resim:ItemResim){
    this.resim=resim;
    this.item=item;
}
public item:Item;
public resim:ItemResim;
}
