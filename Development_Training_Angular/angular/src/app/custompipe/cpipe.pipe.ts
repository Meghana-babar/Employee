import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpipe'
})
export class CpipePipe implements PipeTransform {

  transform(value: any): any {
    let currentdate:any=new Date().getFullYear()
    let dateofbirthyear:any=new Date(value).getFullYear()
    let birthyear=currentdate-dateofbirthyear
    return birthyear;
    }
    

}
