import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';  //para recojer las respuestas que nos devuelve la api
import { GLOBAL } from './global';  //variable de configuracion global

@Injectable()
export class CrimeService{
    public url:string;


    constructor( public _http: HttpClient ){
        this.url = GLOBAL.url;
    }


    getCrimes(id_user =1):Observable<any>{
        return this._http.get(this.url+'get-crimes/'+id_user);
    }
}
