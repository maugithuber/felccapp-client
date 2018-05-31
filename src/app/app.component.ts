import { Component, OnInit, DoCheck, EventEmitter, Input, Output } from '@angular/core';  //agregar el OnInit, DoCheck
import { Router,ActivatedRoute,Params } from '@angular/router'
import { UserService } from './services/user.service';
import { GLOBAL } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  public title:string;
  public identity;
  public url:string;
  public token;
  public status;


  
  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _userService:UserService,
 
  ){
    this.title = 'FELCCAPP';
    this.url = GLOBAL.url;
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();

  }

  //  // output 
  //  @Output() sended = new EventEmitter();


   ngOnInit(){
     this.token = this._userService.getToken();
     this.identity = this._userService.getIdentity();
     console.log(this.identity);
   }
 
   ngDoCheck(){  //funcion para que se refresque automaticamente
     this.identity = this._userService.getIdentity();
   }
 
   logout(){
     localStorage.clear();
     this.identity = null;
     this._router.navigate(['/']);
   }

   
}
