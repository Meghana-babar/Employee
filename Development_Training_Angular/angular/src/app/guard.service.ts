import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

export interface cancomponent{
canleave:() => boolean
}
@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate,CanDeactivate<cancomponent>{
  private loggedIn:any;
  constructor(private _auth:AuthService,private router:Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.loggedIn){

        return true;
      }
      else {
        return false
      }

      }
      getiflogin(cond:any){
        this.loggedIn=cond
      }
      

//      if(this._auth.isAuthenticate())
// {
//   alert("canActivate Activated");
//   return true;
// }else{
//   this.router.navigate(['login']);
//   return false;
// }
//     }
canDeactivate(component:cancomponent){
  if(component.canleave)
  {
    return component.canleave()
  }
  return true;
}
 
}
  
