import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
// import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    providers: [UserService]
})
export class LoginComponent implements OnInit{
    public title:string;
    public user: User;
    public status:string;
    public identity;  //objeto del usuario identificado
    public token;   

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService
    ){
        this.title='INGRESAR';
        this.user = new User( "", "", "", "", "policeman",  "");
    }

    ngOnInit(){
        console.log('login.component cargado correctamente');
    }

    onInit(){
        alert(this.user.email);
        alert(this.user.password);
        console.log(this.user);
    }    

    onSubmit(){
        //logear al user y conseguir sus datos
        this._userService.login(this.user).subscribe(
            response => {
                console.log(response.result);
                this.identity =  response.result;
               
                if( !this.identity || !this.identity.id ){
                    this.status = 'error';
                    console.log('error');
                }else{
                    //persistir datos del user
                    localStorage.setItem('identity',JSON.stringify(this.identity));
                    //conseguir el token
                    console.log('gettingtoken');
                    this.getToken();
                }           
            },
            error => {
                var errorMessage = <any>error;
                console.log({error:errorMessage});
                if(errorMessage != null){
                    this.status = 'error';
                }
            }
        );
    }

    getToken(){
        this._userService.login(this.user,'true').subscribe(
            response => {
                this.token = response.token;
                console.log(this.token);
                if( this.token.length <= 0  ){
                    this.status = 'error';
                }else{
                    //persistir el token del user
                    localStorage.setItem('token',this.token);
                    //conseguir los contadores o estadisticas
                    
                    this.status = 'success';
                    this._router.navigate(['/policemen']);//redireccion despues de logearse al home
                    // this.getCounters();
                }
            },
            error => {
                var errorMessage = <any>error;
                console.log(errorMessage);
                if(errorMessage != null){
                    this.status = 'error';
                }
            }
        );
    }

    // getCounters(){
    //     this._userService.getCounters().subscribe(
    //         response => {
    //             localStorage.setItem('stats',JSON.stringify(response.value));
    //             this.status = 'success';
    //             this._router.navigate(['/']);//redireccion despues de logearse al home
    //         },
    //         error => {
    //             console.log(<any>error);
    //         }
    //     )
    // }


    
}
