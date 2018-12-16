import { Component, OnInit, Input, HostListener, ElementRef,Injectable,Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { Router } from '@angular/router';
import { KullaniciService } from '../../shared/kullanici.service';
@Component({
  selector: 'cdk-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
	isOpen: boolean = false;

  	//currentUser = null;
    public kullaniciAdi:string=null;
  	

  	@Input() currentUser = null;
  	@HostListener('document:click', ['$event', '$event.target'])
  	onClick(event: MouseEvent, targetElement: HTMLElement) {
    	if (!targetElement) {
     		return;
    	}

    	const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    	if (!clickedInside) {
      		this.isOpen = false;
    	}
  	}
  	
    
  	constructor(@Inject(SESSION_STORAGE) private storage:StorageService,private kullaniciService:KullaniciService,private elementRef: ElementRef,private router: Router) { }


  	ngOnInit() {
		  this.getUserNameById(this.getCurrentUserId());
	  }
	  
	  logOut() {
		this.storage.remove("kullaniciId");
		this.router.navigate(['login']);
	  }

	  getUserNameById(userId:string){
		  this.kullaniciService.getUserNameById(userId).subscribe(
			data => {
				this.kullaniciAdi=data;
			},
			err => console.log("Kullanıcı adı çekme başarısız."),
			null
		  );
	  }

	  getCurrentUserId(){
		  return this.storage.get("kullaniciId");
	  }
}
