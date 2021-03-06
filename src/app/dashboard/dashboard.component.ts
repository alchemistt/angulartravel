import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {AuthService} from "../auth.service"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
username=""
data:Array<any>
totalRecords:number
page:number=1

constructor(private route: ActivatedRoute, private router: Router, private auth: AuthService) {
  this.username = this.route.snapshot.paramMap.get('username');
  this.data= new Array<any>()
  }
  logedUser={
username:""
  }

  ngOnInit(): void {
 
  this.auth.userDashBoard(this.username)
  .subscribe(data=>{console.log(data.reqTravel)
    this.data=data.reqTravel;
    this.totalRecords = this.data.length
                   },
             err=>console.log(err));
}
new()
{this.logedUser.username=this.username;
  this.router.navigate(['/new',this.logedUser])
}
idobj={
  id:0
}
view(id: number){
  this.idobj.id=id
  this.router.navigate(['/view',this.idobj]);}
  edit(id: number){
    this.idobj.id=id
    this.router.navigate(['/editticket',this.idobj]);}
  
}