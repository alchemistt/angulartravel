import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {AuthService} from "../auth.service";
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private auth: AuthService) { }
  username = this.route.snapshot.paramMap.get('username');
data= {
  Additional:"Submitted",
  borneBy: "" ,
  endDate :"" ,
  expectedDuration :"", 
  locationCity :"" ,
  passportNumber :"", 
  priority:"",
  projectName :"", 
  travelApprover :"", 
  travelCity :"" ,
  travelStart :"",
  type :"" ,
  upperBound :"", 
  username:this.username

}
  ngOnInit(): void {

  }
  obj={
  username:this.username  }
  create()
  {
  
    this.auth.createNew(this.data)
     .subscribe(res=>{console.log(res)
      this.router.navigate(['/dashboard',this.obj]);
                      },
                err=>console.log(err));
                    }
    
  }


