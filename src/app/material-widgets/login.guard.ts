import { Injectable,Inject } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Utility } from "../utils/utility";
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
 
@Injectable()
export class LoginGuard implements CanActivate {
    constructor(@Inject(SESSION_STORAGE) private storage:StorageService,private router: Router) {
    }
 
    canActivate(gidilecekSayfa: ActivatedRouteSnapshot, gelinenSayfa: RouterStateSnapshot): boolean {
        console.log(this.storage.get("kullaniciId"));
        console.log(Utility.Admin);
        if (this.storage.get("kullaniciId") == Utility.Admin){
            return true;
        }
        
            
             
        this.router.navigate(["login"]);
        return false;
    }
}