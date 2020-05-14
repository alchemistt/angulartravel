import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {AuthService} from "../auth.service";
import { log } from 'util';
import { Chart } from "node_modules/chart.js";
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
counrtyList:Array<any>
constructor(private route: ActivatedRoute, private router: Router, private auth: AuthService) { 
  this.counrtyList= new Array<any>()

}

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
  username:this.username,
  additional: "submitted",
  destinationCountry:""

}
  ngOnInit(): void {
  this.auth.listCountryAPI()
  .subscribe(list=>{console.log(list)
    this.counrtyList=list;
    console.log(list.length)
    
                   },
             err=>console.log(err));
  }
  obj={
  username:this.username  }
  create()
  { 
    console.log(this.data.travelStart);
    
   
    this.auth.createNew(this.data)
     .subscribe(res=>{console.log(res)
      this.router.navigate(['/dashboard',this.obj]);
                      },
                err=>console.log(err));
                    }
valueType(value:any){
 // alert(value)
  this.data.type=value;
  }
  valuePriority(value:any){
  //  alert(value)
    this.data.priority=value;
    }
  valueTravelCity(value:any)
  {
    // alert(value+"  trevae")

    this.data.travelCity=value;
  }
  valueLocationCity(value:any)
  {
    // alert(value+"  loc")
    this.data.locationCity=value;
  }
  visibility = false
  country(value){
    
    alert(value) 
    this.auth.CountryData(value)
     .subscribe(res=>
                  {var stat = res.data
                  console.log((res.data)) 
                  var dates=[]
                  var  total_cases =[]
                  for (var i in res.data) 
                  {dates.push(i);
                    total_cases.push(res.data[i]["total_cases"])}

                  //for (var k in res.data) total_cases.push(k[]["total_cases"]);
                  console.log(total_cases)
                  console.log(dates)
                  this.visibility = true
                  var myChart = new Chart("myChart", {
                    type: 'line',
                    
                    data: {
                        labels: dates,
                        datasets: [{
                            label: 'Covid stituation in '+value,
                            data: total_cases ,
                           
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    },
                 
                });
                  

                    
                      
                      
                      
                    
                      
                
                
                
                
                        },
                err=>console.log(err));
       
  }
  date(value){
alert(value)
  }
  possibleCitys=[
    { title: "Delhi", value: "Delhi" },
    { title: "gurugram", value: "gurugram" },
    { title: "Punjab", value: "Punjab" },
    { title: "noida", value: "noida" },
    { title: "Moscow", value: "Moscow" },
    { title: "Saint Petersburg", value: "Saint Petersburg" },
    { title: "Yekaterinburg", value: "Yekaterinburg" },
    { title: "California", value: "California" },
    { title: "Texas", value: "Texas" },
    { title: "New York", value: "New York" },
    { title: "Texas", value: "Texas" },
    { title: "Florida", value: "Florida" },
    { title: "Illinois", value: "Illinois" },
    { title: "London", value: "London" },
    { title: "Manchester", value: "Manchester" },
    { title: "Hampshire", value: "Hampshire" },
    { title: "Plymouth", value: "Plymouth" }
  ]


  }


