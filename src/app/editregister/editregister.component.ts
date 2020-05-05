import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {AuthService} from "../auth.service"

import { log } from 'util';
import { Title } from '@angular/platform-browser';





@Component({
  selector: 'app-editregister',
  templateUrl: './editregister.component.html',
  styleUrls: ['./editregister.component.css']
})

export class EditregisterComponent implements OnInit {
  
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
  

 
constructor(private route: ActivatedRoute, private router: Router, private auth: AuthService) {
  this.registerUserdata.fname = this.route.snapshot.paramMap.get('fname');
  this.registerUserdata.lname = this.route.snapshot.paramMap.get('lname');
  this.registerUserdata.bu = this.route.snapshot.paramMap.get('bu');
  this.registerUserdata.tittle = this.route.snapshot.paramMap.get('tittle');
  this.registerUserdata.phone = this.route.snapshot.paramMap.get('phone');
  this.registerUserdata.password = this.route.snapshot.paramMap.get('password');
  this.registerUserdata.email = this.route.snapshot.paramMap.get('email');
  this.registerUserdata.address = this.route.snapshot.paramMap.get('address');
  this.registerUserdata.city = this.route.snapshot.paramMap.get('city');
  this.registerUserdata.zip = this.route.snapshot.paramMap.get('zip');

  



  
  console.log(this.registerUserdata);
  
}  ngOnInit(): void {
  }
  edit()
{

this.router.navigate(['/register',this.registerUserdata]);
}
submit()
{
  this.auth.registerUserService(this.registerUserdata)
     .subscribe(res=>{console.log(res)
      this.router.navigate(['/login',this.registerUserdata]);
                      },
                err=>console.log(err));
                    }
}
