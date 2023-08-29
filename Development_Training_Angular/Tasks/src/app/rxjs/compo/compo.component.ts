import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-compo',
  templateUrl: './compo.component.html',
  styleUrls: ['./compo.component.css'],
  providers:[AuthService]
})
export class CompoComponent implements OnInit{

  constructor(private _auth:AuthService){}
  ngOnInit(){
    this._auth.bs.subscribe(
      d=>{console.log(d)}
    )
  }
enteredText:string
onclick(){
  this._auth.raiseddata(this.enteredText)
}
}
