import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  constructor(private requestService: RequestService) { }

  get(): Observable<any> {
    return this.requestService.get<any>('',null);
  }
}
