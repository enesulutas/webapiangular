import { Component, OnInit } from '@angular/core';
import { SatistaService } from '../../shared/satista.service';
import { Satista } from '../../classes/Satista';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  public satista: Satista = new Satista(0,0,0,'','','','');
  public satislar: Satista[] = [];



  constructor(private satistaService:SatistaService) { }

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




}
