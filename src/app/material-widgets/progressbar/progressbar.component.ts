import { Component, OnInit } from '@angular/core';
import {PROGRESSBAR_HELPERS } from './helpers.data';
import { Ozellik } from '../../classes/Ozellik';
import { Kategori } from '../../classes/Kategori';
import { KategoriService } from '../../shared/kategori.service';

@Component({
  selector: 'cdk-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

	public kategori: Kategori = new Kategori();

	public kategoriler:Kategori[]=[];



  constructor(private kategoriService:KategoriService) { }

ngOnInit() {
    this.getAllKategori();
}
onKategoriSubmit(){
  this.kategoriService.addKategori(this.kategori);
}
getAllKategori(){
  this.kategoriService.getAll().subscribe(
    data=>{
      this.kategoriler=data as Kategori[];
    },
    err=>console.log(err)

  );
}
}


