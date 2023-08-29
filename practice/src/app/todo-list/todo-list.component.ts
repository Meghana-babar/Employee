import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  list:any[]=[];
  addTask(item:string){
    this.list.push({id:this.list.length,name:item});
    console.warn(this.list);
  }
  removetask(id:number){
    console.warn(id);
    this.list=this.list.filter(item=>item.id!==id);

  }

}
