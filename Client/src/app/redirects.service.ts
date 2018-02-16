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

    private redirectsApi = '/sitecore/api/ssc/redirectmanager/redirects/dgf/getall';

    getRedirects () {
      return this.http.get(this.redirectsApi, httpOptions);
    }

    fetchItem(itemId) {
      return this.http.get(`/sitecore/api/ssc/scirefapp/sampleitems/${itemId}/get`);
    }
}
