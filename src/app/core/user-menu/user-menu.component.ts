import { Component, OnInit, Input, HostListener, ElementRef,Injectable,Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { Router } from '@angular/router';
@Component({
  selector: 'cdk-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
	isOpen: boolean = false;

  	//currentUser = null;
  	Hari;
  	

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
  	
    
  	constructor(@Inject(SESSION_STORAGE) private storage:StorageService,private elementRef: ElementRef,private router: Router) { }


  	ngOnInit() {
	  }
	  
	  logOut() {
		this.storage.remove("kullaniciId");
		this.router.navigate(['login']);
	  }

}
