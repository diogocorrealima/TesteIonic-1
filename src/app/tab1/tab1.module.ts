import { RequestService } from './../_services/request.service';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { MoviedbService } from '../_services/moviedb.service';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    HttpClientModule 
    
  ],
  declarations: [Tab1Page],
  providers: [RequestService, MoviedbService]
})
export class Tab1PageModule { }
