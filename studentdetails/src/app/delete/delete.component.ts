import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  constructor(private http:HttpClient,@Inject (MAT_DIALOG_DATA) public mat:any){

  }

  cancle(){

  }
  delete(){
    this.http.delete("https://localhost:44344/delete?id="+this.mat.sid).subscribe()
    setTimeout(
      function()
      {
        location.reload();
      },1000
    );
      
    

  }
}
