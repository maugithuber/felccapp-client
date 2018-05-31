import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';  //para recojer las respuestas que nos devuelve la api
import { User } from '../models/user';
import { GLOBAL } from './global';  //variable de configuracion global

@Injectable()
export class UserService{
    public url:string;
    public identity;
    public token;
    public stats;
    public user:User;

    constructor( public _http: HttpClient ){
        this.url = GLOBAL.url;
    }

    login(user: User, gettoken = null): Observable<any>{
        if(gettoken != null){
            user.token = gettoken;
            console.log(gettoken);
        }
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'login', params, {headers:headers});
    }

    getIdentity(){
        let identity = JSON.parse(localStorage.getItem('identity'));
        if(identity != 'undefined'){
            this.identity = identity;  
        }else{
            this.identity = null;  
        }
        return this.identity;
    }

    getToken(){
        let token = localStorage.getItem('token');
        if(token != 'undefined'){
            this.token = token;  
        }else{
            this.token = null;  
        }
        return this.token;
    }
    
    getPolicemen(token,id_user =1):Observable<any>{
        return this._http.get(this.url+'get-policemen/'+id_user);
    }

    registerPoliceman(policeman,id_user=1):Observable<any>{
        let params = JSON.stringify(policeman);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'register-policeman/'+id_user, params, {headers:headers}); 
    }

    editPoliceman(policeman):Observable<any>{
        let params = JSON.stringify(policeman);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.put(this.url+'edit-policeman/'+policeman.id, params,{headers:headers});
    }

    deletePoliceman(id_policeman):Observable<any>{
        return this._http.delete(this.url+'delete-policeman/'+id_policeman);
    }
    
    deletePublication(token,id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json').set('Authorization',token);
        return this._http.delete(this.url+'publication/'+id,{headers:headers});
    }


}
