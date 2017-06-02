import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { AppConfig } from '../../../app.config';

@Injectable()
export class LoginService {

    constructor(private http: Http, private config: AppConfig) { }

    getMenus(username: string, password: string) {

      let headers = new Headers();
      this.createAuthorizationHeader(headers, username, password);
      return this.http.get(this.config.apiUrlMenu + '/v1/menus/', { headers: headers })
          .map((response: Response) => {
              let metaMenu = response.json();
              if (metaMenu) {
                  localStorage.setItem('user', username);
                  localStorage.setItem('password', password);
                  localStorage.setItem('menus', JSON.stringify(metaMenu));
              }else{
                  localStorage.removeItem('user');
                  localStorage.removeItem('password');
                  localStorage.removeItem('menus');
              }
          });
    }

    createAuthorizationHeader(headers: Headers, username: string, password: string) {
      headers.append('Authorization', 'Basic ' +
        btoa(username+':'+password));
    }

    isAuthenticated(){
      let menus = (JSON.parse(localStorage.getItem("menus")));

      if(menus){

        if(menus.records && menus.records.length > 0){

          return true;

        }

        return false;

      }else{

        return false;

      }
    }

    logout() {
        localStorage.removeItem('menus');
    }
}
