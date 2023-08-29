import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {
  data: any[];
  title: string;
  tooltip: object;
  legend: object;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.title = 'Employee Information';
    this.tooltip = {
      enable: true,
      format: '${point.x}: <b>${point.y}</b>'
    };this.getData();
  }

  getData(): void {
    this.authService.getPie().subscribe(
      (res: any) => {
        this.processData(res);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  processData(responseData: any): void {
    const maleCount = responseData.male || 0;
    const femaleCount = responseData.female || 0;
    this.data = [
      { x: 'Male', y: maleCount },
      { x: 'Female', y: femaleCount }
    ];
  }

  goBack(): void {
    this.router.navigate(['empForm']);
  }
   
}
