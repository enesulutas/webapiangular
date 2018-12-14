import { Component, OnInit } from '@angular/core';
import { RADIO_HELPERS } from './helpers.data';
import { MarketService } from '../../shared/market.service';
import { ItemService } from '../../shared/item.service';
import { Market } from '../../classes/Market';
import { OzellikService } from '../../shared/ozellik.service';
import { Ozellik } from '../../classes/Ozellik';
import { Item } from '../../classes/Item';
import { OyunService } from '../../shared/oyun.service';
import { Oyun } from '../../classes/Oyun';
import { ItemRequest} from '../../classes/request/ItemRequest';
import { ItemResim } from '../../classes/ItemResim';


@Component({
  selector: 'cdk-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {


  public market:Market=new Market(0,'',0);
  public marketlerim:string='';
  public marketler:Market[]=[];
  public marketId:number=0;


  public itemResim:ItemResim=new ItemResim();


  public item:Item=new Item(0,'','',false,false,false,0,0);
  public itemlerim:string='';
  public itemler:Item[]=[];

  public ozelliklerim:string=''
  public ozellikler:Ozellik[]=[];

  public oyunId:number=0;
  public oyunlar:Oyun[]=[];

  constructor(private marketService:MarketService,private itemService:ItemService,private ozellikService:OzellikService,private oyunService:OyunService){}


  ngOnInit() {
    this.getAllMarket();
    this.getAllOyun();
    this.getAllOzellik();
    
  }
  onMarketSubmit(){
    console.log(this.market)
   this.marketService.addMarket(this.market);
  }
  onItemSubmit(){
    
    let itemRequest = new ItemRequest(this.item,this.itemResim);
    console.log(itemRequest);
    this.itemService.addItem(itemRequest);
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
  getAllOyun(){
    this.oyunService.getAll().subscribe(
      data=>{
        this.oyunlar=data as Oyun[];
      },
      err=>console.log(err)
    );
  }
  

  
}




