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

    getDistricts():Observable<any>{
        return this._http.get(this.url+'getDistrictsweb');
    }


    getRobo():Observable<any>{
        return this._http.get(this.url+'get-robo');
    }
    getViolacion():Observable<any>{
        return this._http.get(this.url+'get-violacion');
    }
    getViolencia():Observable<any>{
        return this._http.get(this.url+'get-violencia');
    }

    getStats():Observable<any>{
        return this._http.get(this.url+'get-stats');
    }
}
