import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent {
  Datachart:any
  xAxis:any
  yAxis:any
  legend:any
  marker:any
  title:any
  tooltip:any
  data:any;
  ngOnInit(): void {
    this.Datachart=this.Getdata();
    this.xAxis={
      valueType:'Category'
    };
    this.yAxis={
      LabelFormat:'{value}'
    };
    this.legend={
      visible:true
    };
    this.marker={
      visible:true,
      dataLabel:{
        visible:true
      }
    };
    this.title='Employee Information'
    this.tooltip={
      enable:true
    }

  }
  constructor(public ser:AuthService,private route:Router){}
  Getdata(){
    this.ser.getchart().subscribe(
      {next:(res)=>{this.Datachart=res}}
    )
  }
  back(){
  this.route.navigate(['empForm']);
  }

}
