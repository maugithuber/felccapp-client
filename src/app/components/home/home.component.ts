import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MyMarker } from '../../marker';
import { MarkersService } from '../../markers.service';
import { AlertsService } from '../../services/alert.service';
import { GoogleMapsAPIWrapper, AgmMap, LatLngBounds, LatLngBoundsLiteral} from '@agm/core';
import { Alert } from '../../models/alert';

declare var google: any;

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['home.component.css'],
    providers: [AlertsService]
})

export class HomeComponent implements OnInit, AfterViewInit {
    public title:string;
 

    public markers: MyMarker[];
    public alerts: Alert[];

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
    ){
        this.title = 'FELCCAPP';
    

    }

    ngOnInit(){
        console.log('home.component.ts cargado');
        this.getMarkers();
    
        this.getDistricts();
     
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
    
      getDistricts(){
        this._alertsService.getDistricts().subscribe(
            response =>{
                if(response.districts){
                    this.alerts = response.districts;
                    console.log("correcta response");
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