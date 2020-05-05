import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { log } from 'util';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerURL="http://localhost:8080/payment-resource/user/add"
  private adminLoginURL="http://localhost:8080/payment-resource/admin/validate"
  private adminDataDash ="http://localhost:8080/payment-resource/request/get" 
  private userLoginURL = "http://localhost:8080/payment-resource/user/validate"
  private userDataDash ="http://localhost:8080/payment-resource/request/getByuid/" 
  private updateurl ="http://localhost:8080/payment-resource/request/update"
  private new ="http://localhost:8080/payment-resource/request/add"
  private viewbyid ="http://localhost:8080/payment-resource/request/getByrid/"
  
  constructor(private http: HttpClient) { }
  registerUserService(user)
  {
    return this.http.post<any>(this.registerURL,user)
  }
  adminLogin(admin)
  { 
    console.log(admin)
    console.log(this.http.post<any>(this.adminLoginURL,admin))
    return this.http.post<any>(this.adminLoginURL,admin)
  }
  admindashboard():Observable<any>
  {
    return this.http.get<any>(this.adminDataDash)
  }
  userLogin(user)
  { 
    console.log(user)
    console.log(this.http.post<any>(this.userLoginURL,user))
    return this.http.post<any>(this.userLoginURL,user)
  }
  userDashBoard(user):Observable<any>
  { this.userDataDash=this.userDataDash+""+user
    return this.http.get<any>(this.userDataDash,user)
  }
  editstatus(data)
{
  return this.http.post<any>(this.updateurl,data)
}
createNew(data){
  
  return this.http.post<any>(this.new,data)
}
view(id):Observable<any>
{this.viewbyid=this.viewbyid+""+id;
return this.http.get<any>(this.viewbyid)
}

}
