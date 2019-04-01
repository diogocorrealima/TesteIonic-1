import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { empty, Observable, Subscription, from } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class RequestService {
  private subscriptionPathServer: Subscription;
  private pathServer: string;
  public token;
  private headers = { 'Content-Type': 'application/json' };
  private options = { headers: this.headers };

  constructor(protected http: HttpClient) {}

  postBinary(endpoint, body = {}) {}


  get<T>(endpoint, params?: any): Observable<T> {
    return this.http.get<T>(`${environment.moviedb.urlBase}/list/${environment.moviedb.list}?api_key=${environment.moviedb.apiKey}`, {
      ...this.options,
      ...{ params: params }
    });
  }

  complete(observer, next) {
    observer.next(next);
    observer.complete();
  }

  error(error) {
    if (this.isRawErrorResponse(error)) {
      return {
        text: error.statusText,
        status: error.status,
        body: error.json()
      };
    }
    return error;
  }

  private isRawErrorResponse(response: any): boolean {
    return response.hasOwnProperty('status') && response.hasOwnProperty('_body');
  }
}
