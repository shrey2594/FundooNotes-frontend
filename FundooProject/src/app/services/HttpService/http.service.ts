import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl = environment.BASEURL
  constructor(private httpClient: HttpClient) { }

  postService(url: string, reqData: any, token: boolean, httpHeaderOptions: any) {
    console.log(reqData);
    return this.httpClient.post(this.BaseUrl + url, reqData, token && httpHeaderOptions);
  }

  getService(url: string, token: boolean, httpHeaderOptions: any) {
    // console.log(reqData);
    return this.httpClient.get(this.BaseUrl + url,token && httpHeaderOptions);
  }

  putService() {

  }

  patchService() {

  }

}
