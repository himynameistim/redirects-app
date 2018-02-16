import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Redirect } from './redirect';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class RedirectsService {

  constructor(
    private http: HttpClient) { }

    private redirectsApi = '';

    getRedirects () {
      return this.http.get<Redirect[]>(this.redirectsApi);
    }
}
