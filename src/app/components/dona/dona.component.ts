import { Component,OnInit } from '@angular/core';
import { AlertsService } from '../../services/alert.service';
import { Alert } from '../../models/alert';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css'],
  providers:[AlertsService]
})

export class DonaComponent   {

  public stats: any[];
  public doughnutChartLabels:string[] = ['Robo', 'Violacion', 'Violencia'];
  public doughnutChartData:number[] = [22, 5, 4];
  public doughnutChartType:string = 'doughnut';
  



 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }







}
