import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

//models
import { Policeman } from '../../models/policeman';
import { Grade } from '../../models/grade';
//services
import { UserService } from '../../services/user.service';
import { GLOBAL } from '../../services/global';


@Component({
    selector: 'policemen',
    templateUrl: './policemen.component.html',
    providers: [UserService]
})

export class PolicemenComponent implements OnInit{
    public title:string;
    public identity;
    public token;

    public url:string;
    public policeman:Policeman;
    public policemen: Policeman[];
    public total;

    public grades:Grade[];
    public gradeSelected:string;
    public policemanEdited;
    public deleted_id:any;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService
   
    ){
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.title = 'Efectivos policiales';
        this.url = GLOBAL.url;
        this.policeman = new Policeman("","","","","","");
        this.policemanEdited = {};
        this.grades=[
            {id : 1, name:'sargento'},
            {id : 2, name:'capitan'},
            {id : 3, name:'teniente'}
          ];
          this.gradeSelected='sargento';
    }

    ngOnInit(){
        console.log('PolicemenComponent cargado exitosamente');
        console.log(this.identity.id);
        this.getPolicemen(this.identity.id);
    }

    getPolicemen(user){
        this._userService.getPolicemen(user).subscribe(
            response =>{
                if(response.policemen){
                    this.total = response.qty;
                    this.policemen = response.policemen;;
                }else{
                    console.log('error');
                }
            },
            error =>{
               var errorMessage = <any>error;
                console.log(errorMessage);
            }
        );
    }


    registerPoliceman(form){ 
        this.policeman.grade = this.gradeSelected;
        this._userService.registerPoliceman(this.policeman).subscribe(
            response =>{
               if(response.policemanId){
                    form.reset();
                    this.getPolicemen(this.identity.id);
               }else{
                console.log('response error');
               }
            },
            error =>{
                var errorMessage = <any>error;
                console.log(errorMessage);
            }
        );
    }
    
    setEditPoliceman(i){
        this.policemanEdited.id = this.policemen[i].id;
        this.policemanEdited.email = this.policemen[i].email;
        this.policemanEdited.name = this.policemen[i].name;
        this.policemanEdited.grade = this.policemen[i].grade;
        this.policemanEdited.phone = this.policemen[i].phone;
    }

    editPoliceman(form){
        this._userService.editPoliceman(this.policemanEdited).subscribe(
            response =>{
               if(response){
                    form.reset();
                    this.getPolicemen(this.identity.id);
               }else{
                console.log('response error');
               }
            },
            error =>{
                var errorMessage = <any>error;
                console.log(errorMessage);
            }
        );
    }
    setDeletePoliceman(i){
        this.deleted_id =this.policemen[i].id;
    }
        
    deletePoliceman(){
        this._userService.deletePoliceman(this.deleted_id).subscribe(
            response => {
                this.getPolicemen(this.identity.id);
            },
            error =>{
                console.log(<any>error);
            }
        );
    }

}
