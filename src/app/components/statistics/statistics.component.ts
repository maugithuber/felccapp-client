import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MyMarker } from '../../marker';
import { MarkersService } from '../../markers.service';
import { AlertsService } from '../../services/alert.service';
import { GoogleMapsAPIWrapper, AgmMap, LatLngBounds, LatLngBoundsLiteral} from '@agm/core';
import { Alert } from '../../models/alert';

declare var google: any;

 @Component({
  selector: 'statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
  providers: [AlertsService]
})
export class StatisticsComponent implements OnInit, AfterViewInit {

  title = 'Estadisticas de Hechos delictivos';
  public markers: MyMarker[];
  public alerts: Alert[];
  public robos: Alert[];
  public violaciones: Alert[];
  public violencias: Alert[];
  public stats: Alert[];
  public alertsOptions: any[];


  lat =-17.791041;
  lng =  -63.137539;

  labelOptions = {
    color: 'blue',
    fontFamily: '',
    fontSize: '14px',
    fontWeight: 'bold',
    text: 'Distrito policial 1',
    }


    icon = 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png';

  @ViewChild('AgmMap') agmMap: AgmMap;

  constructor(
    private markersService: MarkersService,
    private _alertsService: AlertsService
  ) 
  { 
    
  }

  ngOnInit() {
    this.getMarkers();
    // console.log(this.markers);

    this.getAlerts();
    this.getRobo();
    this.getViolacion();
    this.getViolencia();
    this.getStats();
    // console.log(this.alerts);

  }

  ngAfterViewInit() {
    // console.log(this.agmMap);
    this.agmMap.mapReady.subscribe(map => {
      const bounds: LatLngBounds = new google.maps.LatLngBounds();
      for (var a of this.alerts) {
        bounds.extend(new google.maps.LatLng(  a.lat  , a.lng));
      }
      map.fitBounds(bounds);
      map.panToBounds(bounds); 
    });
  }


  

  getMarkers(): void {
    this.markers = this.markersService.getMarkers();
  }

  getAlerts(){
    this._alertsService.getAlerts().subscribe(
        response =>{
            if(response.alerts){
                this.alerts = response.alerts;
                console.log(this.alerts);
            }else{
                console.log('response error with alerts');
            }
        },
        error =>{
           var errorMessage = <any>error;
           console.log("error en alertas");
            console.log(errorMessage);
        }
    );
  }

  getRobo(){
    this._alertsService.getRobo().subscribe(
        response =>{
            if(response.alerts){
                this.robos = response.alerts;
              
            }else{
                console.log('response error with alerts');
            }
        },
        error =>{
           var errorMessage = <any>error;
           console.log("error en alertas");
            console.log(errorMessage);
        }
    );
  }

  getViolacion(){
    this._alertsService.getViolacion().subscribe(
        response =>{
            if(response.alerts){
                this.violaciones = response.alerts;
              console.log(this.violaciones);
            }else{
                console.log('response error with alerts');
            }
        },
        error =>{
           var errorMessage = <any>error;
           console.log("error en alertas");
            console.log(errorMessage);
        }
    );
  }

  getViolencia(){
    this._alertsService.getViolencia().subscribe(
        response =>{
            if(response.alerts){
                this.violencias = response.alerts;
               
            }else{
                console.log('response error with alerts');
            }
        },
        error =>{
           var errorMessage = <any>error;
           console.log("error en alertas");
            console.log(errorMessage);
        }
    );
  }


  
  getStats(){
    this._alertsService.getStats().subscribe(
        response =>{
            if(response.alerts){
                this.stats = response.alerts;
               
            }else{
                console.log('response error with alerts');
            }
        },
        error =>{
           var errorMessage = <any>error;
           console.log("error en alertas");
            console.log(errorMessage);
        }
    );
  }



  mapIdle() {
    console.log('idle');
  }
}