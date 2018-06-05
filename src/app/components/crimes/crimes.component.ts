import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

//models
import { Crime } from '../../models/crime';
import { Grade } from '../../models/grade';
//services
import { CrimeService } from '../../services/crime.service';
import { UserService } from '../../services/user.service';
import { GLOBAL } from '../../services/global';


@Component({
    selector: 'crimes',
    templateUrl: './crimes.component.html',
    providers: [CrimeService,UserService]
})

export class CrimesComponent implements OnInit{
    public title:string;
    public identity;
    public token;

    public url:string;
    public crime:Crime;
    public crimes: Crime[];
    public total;

    public grades:Grade[];
    public gradeSelected:string;
    public policemanEdited;
    public deleted_id:any;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _crimeService: CrimeService,
        private _userService: UserService
    ){
        this.identity = this._userService.getIdentity();
        this.title = 'Hechos delicitivos';
        this.url = GLOBAL.url;
    
    }

    ngOnInit(){
        console.log('CrimesComponent cargado exitosamente');
        this.getCrimes(this.identity.id);
    }

    getCrimes(user){
        this._crimeService.getCrimes(user).subscribe(
            response =>{
                if(response.policemen){
                    this.total = response.qty;
                    this.crime = response.policemen;;
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




}