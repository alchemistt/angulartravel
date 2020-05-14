import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {AuthService} from "../auth.service"
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editticket',
  templateUrl: './editticket.component.html',
  styleUrls: ['./editticket.component.css']
})

export class EditticketComponent implements OnInit {
  ticket= {
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
    additional: "submitted",
    destinationCountry:""
  }
  obj={
    rid:""
  } 
  info={}
  data:Array<any>
  constructor(private route: ActivatedRoute, private router: Router, private auth: AuthService,) {
    this.data= new Array<any>()

   }

  ngOnInit(): void {
    this.obj.rid = this.route.snapshot.paramMap.get('id');

    console.log(this.obj.rid);
    this.auth.view(this.obj.rid)
  .subscribe(data=>{console.log(data.reqTravel)
    this.data=data.reqTravel;
    this.info =this.data[0]
    console.log(this.info)
    
                   },
             err=>console.log(err));
    
    
    
  }
  

















  newticket= {
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
    additional: "submitted",
    destinationCountry:""
  }




}
