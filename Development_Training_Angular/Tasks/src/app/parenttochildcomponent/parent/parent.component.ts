import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  sir:string='Successfully sent data to parent to child'
  get():string{
 return this.sir;
  }

}
