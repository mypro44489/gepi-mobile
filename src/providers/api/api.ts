import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  url: any;

  static host = "http://localhost/gepi-mobile-api/api/web/v1/";
  //static uploadDir = '';

  public static getLink(m, t, p = null) {
    return ApiProvider.host + m + '?access-token=' + t + '&' + p;
  }

  public static getUploadLink(m) {
    return ApiProvider.host + m;
  }

  

  // getToken() {

  //   return new Promise(resolve => {

  //     this.storage.get('auth_key').then((val) => {
  //       console.log(val);
  //       resolve(val);
  //     });

  //   });
  // }

  constructor(//public http: HttpClient,
    public http: Http, public storage: Storage) {
    console.log('Hello ApiProvider Provider');
  }

  getRequest(m, t, p = null) {

    this.url = ApiProvider.getLink(m, t, p);
    console.log(this.url);
    return new Promise(resolve => {
      this.http.get(this.url).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getRequestPost(m, t, p) {

    this.url = ApiProvider.getLink(m, t, p);
    console.log(this.url);
    //let datas = "commandes="+JSON.stringify(p);

    return new Promise(resolve => {
      this.http.post(this.url, p).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }


  // public static getLink(m, t, p = null) {
  //   return ApiProvider.host + m + '?access-token=' + t + '&' + p;
  // }

  getUrl(m, t = null, p = null) {
    let url=ApiProvider.host + m;
    if(t!=null)url+='?access-token=' + t + '&' + p;
    if(p!=null)url+='&' + p;
    return url;
  }

  getRequest2(m, t = null, p = null) {
    let url = this.getUrl(m, t, p);
    return this.http.get(url);
  }

  getRequestById(m, id, t = null) {
    let url = this.getUrl(m, t) + id;
    return this.http.get(url);
  }

  saveRequest(data, m, t = null) {
    let url = this.getUrl(m, t);
   // let data = JSON.stringify(data);
    return this.http.post(url, data);
  }

  updateRequest(data, m, id, t = null) {
    let url = this.getUrl(m, t) + id;
    console.log(data);
    return this.http.put(url, data);
  }

  deleteRequestById(m, id, t = null) {
    let url = this.getUrl(m, t) + id;
    return this.http.delete(url);
  }

}
