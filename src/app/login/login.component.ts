import { Component, OnInit } from '@angular/core';
import { importType } from '@angular/compiler/src/output/output_ast';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
  

}
