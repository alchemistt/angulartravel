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
  zip :""

 }
  // constructor() { }
 constructor(private auth: AuthService, private router: Router){}

  registerUser()
  {
   
      this.router.navigate(['/editregister',this.registerUserdata]);  
  }

  ngOnInit(): void {
  }

}
