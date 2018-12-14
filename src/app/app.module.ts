import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LazyLoadModule } from './lazy-load/lazy-load.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { YapimciService} from './shared/yapimci.service';
<<<<<<< HEAD
=======
import { OyunService } from './shared/oyun.service';
import { KategoriService } from './shared/kategori.service';
>>>>>>> 026335063860e68864c912ec9a30b5e4a8f90c25
import { OzellikService } from './shared/ozellik.service';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    LazyLoadModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
<<<<<<< HEAD
  providers: [YapimciService,OzellikService],
=======
  providers: [YapimciService,OyunService,KategoriService,OzellikService],
>>>>>>> 026335063860e68864c912ec9a30b5e4a8f90c25
  bootstrap: [AppComponent]
})
export class AppModule { }
