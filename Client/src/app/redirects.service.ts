import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Redirect } from './redirect';
import { Http, RequestOptions, Headers, Response } from '@angular/http';  
import { Observable } from 'rxjs/Rx';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class RedirectsService {

  constructor(
    private http: HttpClient
  ) { }

    private redirectsApi = '/sitecore/api/ssc/redirectmanager/redirects/';

    getRedirects () {
      return this.http.get(this.redirectsApi + '1/getall', httpOptions);
    }

    fetchItem(itemId) {
      return this.http.get(`/sitecore/api/ssc/scirefapp/sampleitems/${itemId}/get`);
    }

    uploadFile(fileToUpload: File) {
      let input = new FormData();
      input.append("file", fileToUpload);

      return this.http.post(this.redirectsApi + '1/UploadFile', input)
    }
}
