import { RequestService } from './../_services/request.service';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabHomePage } from './tab-home.page';
import { MoviedbService } from '../_services/moviedb.service';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { MylistComponent } from './mylist/mylist.component';
import { ReleaselistComponent } from './releaselist/releaselist.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TabHomePage }]),
    HttpClientModule
    
  ],
  declarations: [TabHomePage, MylistComponent, ReleaselistComponent],
  providers: [RequestService, MoviedbService]
})
export class TabHomePageModule { }
