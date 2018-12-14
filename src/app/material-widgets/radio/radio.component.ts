import { Component, OnInit } from '@angular/core';
import { RADIO_HELPERS } from './helpers.data';
import { MarketService } from '../../shared/market.service';
import { ItemService } from '../../shared/item.service';
import { Market } from '../../classes/Market';
import { OzellikService } from '../../shared/ozellik.service';
import { Ozellik } from '../../classes/Ozellik';
import { Item } from '../../classes/Item';


@Component({
  selector: 'cdk-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {


  public market:Market=new Market(0,'',0);
  public marketlerim:string='';
  public marketler:Market[]=[];

  public item:Item=new Item(0,'','',false,false,false,0,0);
  public itemlerim:string='';
  public itemler:Item[]=[];

  public ozelliklerim:string=''
  public ozellikler:Ozellik[]=[];

  constructor(private marketService:MarketService,private itemService:ItemService,private ozellikService:OzellikService){}


  ngOnInit() {
    this.getAllMarket();
  }
  onMarketSubmit(){
    this.marketService.addMarket(this.market);
  }
  onItemSubmit(){
    this.itemService.addItem(this.item);
    console.log(this.item)
  }

  getAllMarket(){
    this.marketService.getAll().subscribe(
      data=>{
        this.marketler=data as Market[];
        console.log(this.market);
      },
      err=>console.log(err)
    );
  }
  getAllOzellik(){
    this.ozellikService.getAll().subscribe(
      data=>{
        this.ozellikler=data as Ozellik[];
      },
      err=>console.log(err)
    );
  }

  
}




