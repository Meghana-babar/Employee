import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import{map} from'rxjs';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  allproducts:Product[]=[];
  constructor( private http:HttpClient){ }

  ngOnInit(){
    this.fetchdata();
  }
fetchprod(){
  this.fetchdata();
}

  onsubmit(products:{pname:string,desc:string,price:string}){
    const headers=new HttpHeaders({myheader:'meghana'}); //header is optional parameter of post by using this we can create our own custom headers

  this.http.post<{name:string}>("http://localhost:3000/posts",products,{headers:headers}).subscribe((res)=>{
    console.log(res);
  })

  }
  private fetchdata(){
    this.http.get<{[key:string]:Product}>('http://localhost:3000/posts')
    .pipe(map((res)=>
    {
      const products=[]
      for(const key in res){
        if(res.hasOwnProperty(key))
        {
          products.push({...[key],id:key})    //...spread operator it will spread the properties of key

        }
      }
      return products;
    }))
    .subscribe((products)=>
    {
      console.log(products);
      this.allproducts=products
    })
  }
  ondelete(id:string){
    this.http.delete('http://localhost:3000/posts/'+id).subscribe()

  }

}
