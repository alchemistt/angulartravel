import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service"
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboardadmin',
  templateUrl: './dashboardadmin.component.html',
  styleUrls: ['./dashboardadmin.component.css']
})
export class DashboardadminComponent implements OnInit {
data:Array<any>
totalRecords:number
page:number=1

  constructor(private auth: AuthService ,private router: Router) {
    this.data= new Array<any>()
   }

  ngOnInit(): void {
  this.auth.admindashboard()
  .subscribe(data=>{console.log(data.reqTravel)
    this.data=data.reqTravel;
    this.totalRecords = this.data.length
                   },
             err=>console.log(err));
    

  }
  

idobj={
  id: 0
}
edit(id: number){
  this.idobj.id=id
  this.router.navigate(['/req',this.idobj]);
}
view(id: number){
  this.idobj.id=id
  this.router.navigate(['/view',this.idobj]);}

}