import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LazyLoadModule } from './lazy-load/lazy-load.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { YapimciService} from './shared/yapimci.service';

import { OyunService } from './shared/oyun.service';
import { KategoriService } from './shared/kategori.service';
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
 
  providers: [YapimciService,OyunService,KategoriService,OzellikService],
  bootstrap: [AppComponent]
})
export class AppModule { }
