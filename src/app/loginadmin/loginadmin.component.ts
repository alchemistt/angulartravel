import { Component, OnInit } from '@angular/core';
import { AuthService} from "../auth.service"
import { log } from 'util';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})

export class LoginadminComponent implements OnInit {
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 

  constructor(private auth: AuthService, private router: Router) { }
  LoginAdmin={
    username:"",
    password :""
  }
  logininit(){
    this.auth.adminLogin(this.LoginAdmin)
    .subscribe(arg => this.validate(arg));
  
  }
login(loginAdmin)
{
  // console.log(this.LoginAdmin)
  this.auth.adminLogin(this.LoginAdmin)
    .subscribe(arg => this.validate(arg));
  

}
obj={}
notification = ""
validate(result)

{
console.log(result.aMessage);
if(result.aMessage=="Sucess")
{
  this.router.navigate(['/dashboardadmin']);  

}
else{

  console.log("badk");
  this.notification = "Please enter correct username and password"  

}
 
}
  ngOnInit(): void {
  }

}
