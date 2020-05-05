import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AuthService} from "../auth.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-req',
  templateUrl: './req.component.html',
  styleUrls: ['./req.component.css']
})
export class ReqComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private auth: AuthService) { }
  rid= this.route.snapshot.paramMap.get('id');
  data={
    additional:"",
    rid: this.rid
  }
  ngOnInit(): void {
   
    
  }
  edit(){
    console.log(this.data.additional) 
    this.auth.editstatus(this.data)
     .subscribe(res=>{console.log(res)
      this.router.navigate(['/dashboardadmin']);
                      },
                err=>console.log(err));
                    }

  }

