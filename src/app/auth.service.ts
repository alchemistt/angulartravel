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
  private forgetURL = ""
  private listOfCountryURL="https://api.covid19api.com/countries"
  private dataCountryURL="https://api.quarantine.country/api/v1/spots/month?region="
 
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
  { this.userDataDash=this.userDataDash
    var data={
    email:user
    }
    return this.http.post<any>(this.userDataDash,data)
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
forget(data)
{
this.forgetURL = "http://localhost:8080/payment-resource/user/password/"
//this.forgetURL=this.forgetURL+data.email
console.log(this.forgetURL);
return this.http.post<any>(this.forgetURL,data)

}

listCountryAPI():Observable<any>
  {
    return this.http.get<any>(this.listOfCountryURL)
  }
CountryData(country:String):Observable<any>
{
var dataCountryURL="https://api.quarantine.country/api/v1/spots/month?region="
dataCountryURL=dataCountryURL+country;
return this.http.get<any>(dataCountryURL)
}

}
