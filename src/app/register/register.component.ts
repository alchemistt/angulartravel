import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service"
import { log } from 'util';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 registerUserdata={
  fname:"",
  lname:"",
  bu:"",
  password:"",
  phone:"",
  tittle:"",
  email:"",
  address:"",
  city:"",
  state:"",
  zip :"",
  country:""

 }
 emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 
 numberPattern="\d{10}";
  // constructor() { }
 constructor(private auth: AuthService, private router: Router){}
 valuestate(value:any){
  //  alert(value)
  this.registerUserdata.state=value

 }
 valuecountry(value:any){
  // alert(value)
  this.registerUserdata.country=value;
}
  registerUser()
  {
   
      this.router.navigate(['/editregister',this.registerUserdata]);  
  }

  ngOnInit(): void {
  }

}
