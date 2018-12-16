import { Component, OnInit,Inject } from '@angular/core';
import { SatinAlinanlarService } from '../../shared/satinAlinanlar.service';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { SatinAlinanResponse } from '../../classes/response/SatinAlinanResponse';
import { MatDialog } from "@angular/material";
import { ChoosePriceDialogComponent } from './choose-price-dialog/choose-price-dialog.component';
import { SatistaService } from '../../shared/satista.service';
import { SatistaRequest } from '../../classes/request/SatistaRequest';


@Component({
  selector: 'cdk-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  //animations: [fadeAnimation]
})
export class ListComponent implements OnInit {

    public satinAlinanlar:SatinAlinanResponse[]=[]
    public satinAlinanlarBosMu:boolean=false;

    fiyat:number;

    constructor(private satinAlinanlarService:SatinAlinanlarService,private satistaService:SatistaService,@Inject(SESSION_STORAGE) private storage:StorageService,public dialog: MatDialog) { }

    ngOnInit() {
      this.getAllItemsByUserId(this.getCurrentUserId());
    }
  
    getAllItemsByUserId(userId:string){
      this.satinAlinanlarService.getAllSatinAlinanlar(userId).subscribe(
        data => {
          this.satinAlinanlar = data as SatinAlinanResponse[];
          this.satinAlinanlarBosMu=this.satinAlinanlar.length>0?true:false;
        },
        err => console.log('Yapımcıları çekme başarısız.'),
        null
      );
    }

    satisaKoy(itemId:string){

      const dialogRef = this.dialog.open(ChoosePriceDialogComponent, {
        width: '250px',
        data: {fiyat: this.fiyat}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.fiyat = result;
        this.satistaService.satisaKoy(new SatistaRequest(0,this.fiyat,parseInt(itemId),this.getCurrentUserId()));
      });
    }

    getCurrentUserId(){
      return this.storage.get("kullaniciId");
    }
    
}
