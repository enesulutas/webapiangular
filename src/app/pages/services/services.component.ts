import { Component, OnInit,Inject } from '@angular/core';
import { SatistaService } from '../../shared/satista.service';
import { Satista } from '../../classes/Satista';
import { SatinAlinan } from '../../classes/SatinAlinan';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { SatinAlinanlarService } from '../../shared/satinAlinanlar.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  public satista: Satista = new Satista(0,0,0,'','','','');
  public satislar: Satista[] = [];



  constructor(private satistaService:SatistaService,private satinAlinanlarService:SatinAlinanlarService,@Inject(SESSION_STORAGE) private storage:StorageService) { }

  ngOnInit() {
    this.getAllSatista();
  }

  getAllSatista(){
    this.satistaService.getAll().subscribe(
      data=>{
        this.satislar=data as Satista[];
      },
      err=>{
        console.log("satis getirme hatası");
      }
    )
  }

  satinAl(itemId:number){
      this.satinAlinanlarService.satinAl(new SatinAlinan(0, this.getCurrentUserId(),itemId));
  }

  getCurrentUserId(){
   return this.storage.get("kullaniciId");
  }

}
