import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  serverURL = 'https://beitelmal.info'

  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  login(email, password) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      let urlSearchParams = new URLSearchParams();
      urlSearchParams.append('email', email);
      urlSearchParams.append('password', password);
      let body = urlSearchParams.toString()
      console.log(headers);
      this.http.post(this.serverURL + '/api/v1/' + 'auth/login', body, { headers: headers }).
        subscribe(res => {
          console.log(res);
          resolve(res.json())
        }, (err) => {
          reject('error'+err);
        });
    });
  }

  register(name, email, phone, country_id, member_type, package_id, password, stock_type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Methods', '*');
      headers.append('Access-Control-Allow-Headers', '*');
      let urlSearchParams = new URLSearchParams();
      urlSearchParams.append('name', name);
      urlSearchParams.append('email', email);
      urlSearchParams.append('phone', phone);
      urlSearchParams.append('country_id', country_id);
      urlSearchParams.append('member_type', member_type);
      urlSearchParams.append('package', '');
      urlSearchParams.append('password', password);
      urlSearchParams.append('stock_type', stock_type);
      let body = urlSearchParams.toString()
      console.log(headers);
      this.http.post(this.serverURL + '/api/v1/' + 'auth/register', body, { headers: headers }).
        subscribe(res => {
          console.log(res);
          resolve(res.json())
        }, (err) => {
          reject(err);
        });
    });
  }

  freeRegister(name, email, phone, package_id) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Methods', '*');
      headers.append('Access-Control-Allow-Headers', '*');
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      let urlSearchParams = new URLSearchParams();
      urlSearchParams.append('name', name);
      urlSearchParams.append('email', email);
      urlSearchParams.append('phone', phone);
      urlSearchParams.append('package', package_id);
      let body = urlSearchParams.toString()
      this.http.post(this.serverURL + '/api/v1/' + 'auth/freeregister', body, { headers: headers }).
        subscribe(res => {
          console.log(res);
          resolve(res.json())
        }, (err) => {
          reject(err);
        });
    });
  }

  registerFormData() {
    return this.http.get(this.serverURL + '/api/' + 'v1/auth/formData').map((res: any) => res.json());
  }

  about() {
    //console.log(this.serverURL+'/api/'+'v1/about');
    return this.http.get(this.serverURL + '/api/' + 'v1/about').map((res: any) => res.json());
  }

  package() {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', '*');
    headers.append('Access-Control-Allow-Headers', '*');
    return this.http.get(this.serverURL + '/api/' + 'v1/package', {headers}).map((res: any) => res.json());
  }

  reports() {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', '*');
    headers.append('Access-Control-Allow-Headers', '*');
    return this.http.get(this.serverURL + '/api/' + 'v1/reports', {headers}).map((res: any) => res.json());
  }

  recommendations(id, rec_type, stock_type_id, sector_id) {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', '*');
    headers.append('Access-Control-Allow-Headers', '*');
    return this.http.get(this.serverURL + '/api/' + 'v1/recommendations?id=' + id + '&rec_type=' + rec_type + '&stock_type_id=' + stock_type_id + '&sector_id=' + sector_id , {headers}).map((res: any) => res.json());
  }

  shortRecommendations() {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', '*');
    headers.append('Access-Control-Allow-Headers', '*');
    return this.http.get(this.serverURL + '/api/' + 'v1/evaluation/short', {headers}).map((res: any) => res.json());
  }

  longRecommendations() {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', '*');
    headers.append('Access-Control-Allow-Headers', '*');
    return this.http.get(this.serverURL + '/api/' + 'v1/evaluation/long', {headers}).map((res: any) => res.json());
  }

  longRecommendationsMonth(year) {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', '*');
    headers.append('Access-Control-Allow-Headers', '*');
    return this.http.get(this.serverURL + '/api/' + 'v1/evaluation/long/month?year=' + year, {headers}).map((res: any) => res.json());
  }

  longRecommendationsDay(month, id) {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', '*');
    headers.append('Access-Control-Allow-Headers', '*');
    return this.http.get(this.serverURL + '/api/' + 'v1/evaluation/long/day?month=' + month + '&id=' + id , {headers}).map((res: any) => res.json());
  }

  sectors() {
    return this.http.get(this.serverURL + '/api/' + 'v1/sectors').map((res: any) => res.json());
  }

  services() {
    return this.http.get(this.serverURL + '/api/' + 'v1/services').map((res: any) => res.json());
  }

  uploads() {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    return this.http.get(this.serverURL + '/api/' + 'v1/uploads').map((res: any) => res.json());
  }

  contactInfo() {
    return this.http.get(this.serverURL + '/api/' + 'v1/contactInfo').map((res: any) => res.json());
  }

  terms() {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    return this.http.get(this.serverURL + '/api/' + 'v1/terms', {headers}).map((res: any) => res.json());
  }

  policy() {
    return this.http.get(this.serverURL + '/api/' + 'v1/policy' ).map((res: any) => res.json());
  }

  respons() {
    return this.http.get(this.serverURL + '/api/' + 'v1/respons').map((res: any) => res.json());
  }

  backMoney() {
    return this.http.get(this.serverURL + '/api/' + 'v1/backmoney').map((res: any) => res.json());
  }

  remainingDays(email) {
    return this.http.get(this.serverURL + '/api/' + 'v1/remaining?email=' + email).map((res: any) => res.json());
  }

}
