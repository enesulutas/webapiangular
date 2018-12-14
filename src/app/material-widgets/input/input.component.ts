import {Component, OnInit} from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';
import {Yapimci} from '../../classes/Yapimci';
import {Oyun} from '../../classes/Oyun';
import {YapimciService} from '../../shared/yapimci.service';
import { Kategori } from '../../classes/Kategori';
import { KategoriService } from '../../shared/kategori.service';
import { OyunRequest } from '../../classes/request/OyunRequest';
import { Resim } from '../../classes/Resim';
import { Video } from '../../classes/Video';
import { OyunService } from '../../shared/oyun.service';

@Component({
  selector: 'cdk-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  public yapimci: Yapimci = new Yapimci(0, '', new Date(), '');

  public oyun: Oyun = new Oyun();
  public resim:Resim=new Resim();
  public video:Video=new Video();

  public kategorilerim: number[] = [];

  public kategoriler: Kategori[] = [];
  public yapimcilar: Yapimci[] = [];

  constructor(private oyunService: OyunService,private yapimciService: YapimciService,private kategoriService:KategoriService) {
  }

  ngOnInit() {
    this.getAllYapimci();
    this.getAllKategori();
  }

  onYapimciSubmit(form:NgForm) {
    this.yapimciService.addYapimci(this.yapimci);
    form.resetForm();
  }

  onOyunSubmit(form:NgForm) {
    let oyunRequest=new OyunRequest(this.oyun,this.resim,this.video,this.kategorilerim);
    this.oyunService.addOyun(oyunRequest);
    form.resetForm();
  }

  getAllYapimci() {
    this.yapimciService.getAll().subscribe(
      data => {
        this.yapimcilar = data as Yapimci[];
      },
      err => console.log('Yapımcıları çekme başarısız.'),
      null
    );
  }
  getAllKategori() {
    this.kategoriService.getAll().subscribe(
      data => {
        this.kategoriler = data as Kategori[];
      },
      err => console.log('Kategorileri çekme başarısız.'),
      null
    );
  }

}
