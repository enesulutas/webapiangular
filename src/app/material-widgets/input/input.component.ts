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

@Component({
  selector: 'cdk-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  public yapimci: Yapimci = new Yapimci(null, '', new Date(), '');
  public oyun: Oyun = new Oyun();

  public kategorilerim: string = '';
  public kategoriler: string[] = ['enes', 'huseyin', 'muhammed'];

  public yapimcilarim: string = '';
  public yapimcilar: Yapimci[] = [];

  constructor(private yapimciService: YapimciService) {
  }

  ngOnInit() {
    this.getAllYapimci();
  }

  onYapimciSubmit() {
    this.yapimciService.addYapimci(this.yapimci);
  }

  onOyunSubmit() {
    console.log(this.oyun);
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
}
