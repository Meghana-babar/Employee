import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
searchvalue:string='';
  changeserchvalue(eventdata:Event)
  {
        console.log((<HTMLInputElement>eventdata.target).value);
        this.searchvalue=(<HTMLInputElement>eventdata.target).value;
  }
}
