import { Component, OnInit } from '@angular/core';
import { importType } from '@angular/compiler/src/output/output_ast';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private auth: AuthService, private router: Router) { }
  loginUserdata={
    email:"",
    password:""
  }
  data={
    username:""
  }
  login()
  {
    this.auth.userLogin(this.loginUserdata)
    .subscribe(arg => this.validate(arg));
  
  }
  forget()
  {
    //alert("password reset if account exist");
    this.router.navigate(['/forget']);  


  }
  
  
  notification=""
  validate(u) 
  {
    if(u.umessage=="Sucess")
    { console.log(this.loginUserdata.email);
      this.data.username=this.loginUserdata.email;
    
      this.router.navigate(['/dashboard',this.data]);  
      //this.router.navigate(['/editregister',this.registerUserdata]);  
    
    }
    else{
    
      console.log("badk");
      this.notification = "Please enter correct username and password"  
    
    }
    

  }
  
  ngOnInit(): void {
  }
  
  imports: [
   

    FormsModule      //<----------make sure you have added this.
  ]
}
