import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';


@Injectable()
export class GlobalService {

  public static HOST = 'http://52.170.217.239:8080/mapi/rest/';
  //default
//  public static HOST = 'http://localhost:8080/mapi/rest/';//local
 // public static HOST = 'http://192.168.43.40:8080/mapi/rest/';
//  public static HOST = 'http://172.25.1.19:8080/mapi/rest/'

  public static LANGUAJES = 'idioma/idiomas';

  constructor(private _http: Http) {

  }


  static getHeadersOption(): RequestOptions {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return options;
  }

}
