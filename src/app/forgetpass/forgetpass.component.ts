import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent implements OnInit {

  constructor(private router: Router , private auth: AuthService) { }

  ngOnInit(): void {
  }
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 
 data ={
   email :""
 }
 forgetfun(data)
 {
console.log(this.data.email);
this.auth.forget(this.data).subscribe(arg => console.log(arg)
);
this.router.navigate(['/login']);

 }

}
