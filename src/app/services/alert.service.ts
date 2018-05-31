import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';  //para recojer las respuestas que nos devuelve la api
import { GLOBAL } from './global';  //variable de configuracion global

@Injectable()
export class AlertsService{
    public url:string;


    constructor( public _http: HttpClient ){
        this.url = GLOBAL.url;
    }

    getAlerts():Observable<any>{
        return this._http.get(this.url+'get-alerts');
    }


}
