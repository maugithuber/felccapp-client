import  { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit{
    public title:string;
    public lat: number;
    public lng: number;
    public lat2: number;
    public lng2: number;

    constructor(){
        this.title = 'FELCCAPP';
        this.lat = -17.791131;
        this.lng = -63.137763;

    }

    ngOnInit(){
        console.log('home.component.ts cargado');
    }
}