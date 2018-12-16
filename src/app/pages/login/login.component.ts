import { Component, OnInit,Injectable,Inject } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Kullanici } from "../../classes/Kullanici";
import { KullaniciService } from "../../shared/kullanici.service";
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public kullanici: Kullanici = new Kullanici();

  constructor(@Inject(SESSION_STORAGE) private storage:StorageService,
    private router: Router,
    private kullaniciService: KullaniciService
  ) {}

  ngOnInit() {}

  onLoginSubmit(loginFrm: NgForm) {
    this.kullaniciService.login(this.kullanici).subscribe(
      data => {
        this.saveToLocalStorage("kullaniciId", data);
        this.router.navigate(['/']);
      },
      err => console.log("Kategorileri çekme başarısız."),
      null
    );
  }

  saveToLocalStorage(key, value) {
    this.storage.set(key, value);
  }
  getValueFromLocalStorage(key) {
    return this.storage.get(key);
  }

}
