import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {AuthService} from "../auth.service"
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {
  data:Array<any>
  totalRecords:number
  id:string
  constructor(private route: ActivatedRoute, private router: Router, private auth: AuthService) { 
    this.data= new Array<any>()
  this.id = this.route.snapshot.paramMap.get('id');


  }

  ngOnInit(): void {
    this.auth.view(this.id)
  .subscribe(data=>{console.log(data.reqTravel)
    this.data=data.reqTravel;
                   },
             err=>console.log(err));
  
  }

}
